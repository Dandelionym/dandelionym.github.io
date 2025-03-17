# _plugins/medium_importer.rb
require 'rss'
require 'open-uri'
require 'nokogiri'

module Jekyll
  class MediumImporter < Generator
    safe true
    priority :lowest

    def generate(site)
      site.data['medium_posts'] = []

      site.config['external_sources'].each do |source|
        if source['name'] == 'medium.com' && source['rss_url']
          rss_url = source['rss_url']

          begin
            URI.open(rss_url) do |rss|
              feed = RSS::Parser.parse(rss)
              puts "Importing #{feed.items.length} items from #{rss_url}"

              feed.items.each do |item|
                # Correctly access the content:encoded element
                content = nil

                # Try different possible accessor methods based on how RSS library handles namespaces
                if item.respond_to?(:content_encoded)
                  # Most common approach - namespace:name becomes namespace_name
                  content = item.content_encoded
                elsif item.respond_to?(:encoded) && defined?(RSS::ContentModel) && item.is_a?(RSS::ContentModel)
                  # Some RSS libraries use this pattern
                  content = item.encoded
                else
                  # Fallback: manually extract using Nokogiri
                  doc = Nokogiri::XML(item.to_s)
                  content_node = doc.at_xpath("//content:encoded") || doc.at_xpath("//encoded")
                  content = content_node&.text
                end

                # Ensure we have content as a string
                content = content.to_s if content

                # Continue with your image parsing
                doc = Nokogiri::HTML(content)
                first_image = doc.at_css('img')
                image_url = first_image ? first_image['src'] : nil
                images = doc.css('img').map { |img| img['src'] }

                post_data = {
                  'title' => item.title,
                  'url' => item.link,
                  'date' => item.pubDate,
                  'content' => content,
                  'first_image' => image_url,
                  'images' => images
                }

                site.data['medium_posts'] << post_data
                puts "Added post: #{item.title}"
              end
            end
          rescue StandardError => e
            puts "Error importing from #{rss_url}: #{e.message}"
          end
        end
      end
    end
  end
end