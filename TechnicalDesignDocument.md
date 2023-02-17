# Technical Design Document

Author: Nina Welch
Created: 13.02.2023
Last updated: 17.02.2023 by Nina Welch

## Purpose

This TDD was created to explore solutions for validating user input by using only front-end technologies and saving submitted links, so that they presist on page reload.

The input is a link that has a valid url that points to an existing page.

## Background

With the use of backend technologies, a server could connect safely to an API such as Google's [SerpApi](https://serpapi.com/). API could be used to verify, that the link points to an existing page. Google's SerpApi would also be useful for fetching data, such as the page title and description.

Connecting to Google's SerpApi from client side is not allowed due to Cross-origin resource sharing (CORS). Using another API's such as [AbstractAPI](https://www.abstractapi.com/api/web-scraping-api) would not cause CORS errors, but the API key required for access would be exposed and could be abused.

Without a database any links user has added will be removed when the page reloads.

## Solution

Validating user input could be done in three steps:

1. Set input type to [url](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/url)
2. Use `isValidURL` method to [strengthen security against possible exploits ](https://snyk.io/blog/secure-javascript-url-validation/)
3. Use fetch GET request with no-cors mode to acertain if page exixts

The limitation of this approach is that the fetch GET request still accepts invalid links for an existing host, i.e https://google.com/hfhfefhewlgew.

For the submitted links to persist they could be saved temporarily to [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) and retrieved from there on page reload. When links are deleted, they should also be deleted form local storage.

This approach may cause errors in case localStorage has other saved content that could accidentally end up being added to the list.
