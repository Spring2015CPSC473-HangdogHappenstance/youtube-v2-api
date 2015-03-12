# CPSC473-Assignment4

1. Briefly describe your team’s project

   > Our project is to create a system that brings people together through their common interests. We're still working on the extent and methods of it, but a running idea is to leave it as universal as possible to allow the end users to turn the site/project into whatever they want to get out of it. By allowing a user to identify alternatives to "liking" an item, we can allow them to dislike or hate items too. This opens the system up to doubling as a dating site, a homework helping site, or even a job search site. Adding external API systems into our data sources can allow us to validate user data to ensure more consistant content.

2. Research and compile a list of APIs that might be useful for your project 

   > We could integrate many external APIs to the system and add conditional criteria to determine which API is queried for data validation. I located 2 potential dictionary APIs and a few misc APIs that could be used to validate the relationship data "likes,dislikes,enrolled,etc" as well as offer autocomplete in some fashion.
   >
   > Dictionaries
   >
   > * https://glosbe.com/a-api
   > * http://en.wiktionary.org/w/api.php
   >
   > Generic Database
   >
   > * http://wikidata.org
   >
   > Video
   >
   > * http://youtube.com

3. For each API, briefly describe how its functionality might be used in your project

   > The glosbe.com api is an alpha/beta staged api for translations. It could be used to implement multi-lingual support to the project.
   > Wikitionary is a community-managed site with words and definitions, it is run on the MediaWiki platform. It offers data regarding the type of word and even definition information. It appears to use the standard MediaWiki API system, so data returned may require further processing for usability. Same for the WikiData database.
   > Youtube has videos and a deprecated API that doesn't force everyone to sign up for a token

4. Choose one API from your list and create an example web page using jQuery AJAX to call the API and display the returned results

   > I went with the YouTube API because the MediaWiki-based API docs are not easy to read, and would take longer to get started with. The Glosbe JSON API just gives translations, and my use of the APIs wasn't very creative anyhow.

5. Describe why you chose that particular API and provide a link to its documentation

   > https://developers.google.com/youtube/2.0/reference
   > For all the potential objects that a user may like, YouTube videos may become one of them.
   > I chose the YouTube API because it was simple enough to use and didn't require me to sign up to work with it. I was feeling a bit lazy on dealing with auth tokens.

6. Discuss any potential issues that you can foresee with using this API in your project 

   > Version 2.0 is deprecated, so we'd need to jump to V3.0. But I believe most of the 3.0 actions all require an auth token too.

7. Evaluate your experience creating the example web page and make a recommendation of whether your team should use this API or keep looking for better options 

   > We don't have any certainty that this API version will continue to be used or available. So we would need to jump to the new one someday sooner than later. We'd likely mix multiple API sources to our system.

8. Describe how the example you wrote might be expanded to use additional functionality provided by the API

   > The newer version could add video "liking", "sharing" or even a full-screen mode. They also offer user-specific searching, channel searching and playlists.
