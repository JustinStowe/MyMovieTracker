

<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->

<a name="readme-top"></a>

<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/JustinStowe/MyMovieTracker">
    <img src="https://user-images.githubusercontent.com/110639329/233704909-170868e2-f051-42e6-b733-8a77e037d9b9.jpg" alt="Logo" width="80" height="80>
  </a>

<h3 align="center">My Movie Tracker</h3>

  <p align="center">
    This app allows you to search for any movie and add it to a list of movies you would like to watch. Once you have watched it, you are able to then add it to your watched movies list. You are also able to make comments for any other user to see on each movie to let them know your thoughts on the movie.
    <br />
    <a href="https://github.com/JustinStowe/MyMovieTracker"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/JustinStowe/MyMovieTracker">View Demo</a>
    ·
    <a href="https://github.com/JustinStowe/MyMovieTracker/issues">Report Bug</a>
    ·
    <a href="https://github.com/JustinStowe/MyMovieTracker/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![Product Name Screen Shot][product-screenshot]](https://github.com/JustinStowe/MyMovieTracker)

<!-- Here's a blank template to get started: To avoid retyping too much info. Do a search and replace with your text editor for the following: `JustinStowe`, `MyMovieTracker`, `shadowangel1234`, `Justin Stowe`, `Google`, `justinstowe12@gmail.com`, `My Movie Tracker`, `This app allows you to search for any movie and add it to a list of movies you would like to watch. Once you have watched it, you are able to then add it to your watched movies list. You are also able to make comments for any other user to see on each movie to let them know your thoughts on the movie.` -->

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

<!-- * [![Next][Next.js]][Next-url] -->

- [![React][react.js]][react-url]
- [![Express][express.js]][express-url]
- [![Mongo][mongo.js]][mongo-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Get a free API Key at [www.omdbapi.com](https://www.omdbapi.com/apikey.aspx?__EVENTTARGET=freeAcct&__EVENTARGUMENT=&__LASTFOCUS=&__VIEWSTATE=%2FwEPDwUKLTIwNDY4MTIzNQ9kFgYCAQ9kFgICBw8WAh4HVmlzaWJsZWhkAgIPFgIfAGhkAgMPFgIfAGhkGAEFHl9fQ29udHJvbHNSZXF1aXJlUG9zdEJhY2tLZXlfXxYDBQtwYXRyZW9uQWNjdAUIZnJlZUFjY3QFCGZyZWVBY2N0oCxKYG7xaZwy2ktIrVmWGdWzxj%2FDhHQaAqqFYTiRTDE%3D&__VIEWSTATEGENERATOR=5E550F58&__EVENTVALIDATION=%2FwEdAAU%2BO86JjTqdg0yhuGR2tBukmSzhXfnlWWVdWIamVouVTzfZJuQDpLVS6HZFWq5fYpioiDjxFjSdCQfbG0SWduXFd8BcWGH1ot0k0SO7CfuulHLL4j%2B3qCcW3ReXhfb4KKsSs3zlQ%2B48KY6Qzm7wzZbR&at=freeAcct&Email=)
2. Clone the repo
   ```sh
   git clone https://github.com/JustinStowe/MyMovieTracker.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your API in `Search.jsx`
   ```js
   const url = `https://www.omdbapi.com/?s=${searchTerm}&apikey=YOUR_API_KEY`;
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

- [ ] Api Calls to imbd
- [ ] User accounts and authentication
- [ ] keep unique list of want to watch and watched videos
- [ ] Able to make public comments on videos

See the [open issues](https://github.com/JustinStowe/MyMovieTracker/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Justin Stowe - [@shadowangel1234](https://twitter.com/shadowangel1234) - justinstowe12@gmail.com

Project Link: [https://github.com/JustinStowe/MyMovieTracker](https://github.com/JustinStowe/MyMovieTracker)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

- [Darya](https://github.com/bazilevsd)
- [Andrew](https://github.com/amcculley222)
- []()

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/JustinStowe/MyMovieTracker.svg?style=for-the-badge
[contributors-url]: https://github.com/JustinStowe/MyMovieTracker/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/JustinStowe/MyMovieTracker.svg?style=for-the-badge
[forks-url]: https://github.com/JustinStowe/MyMovieTracker/network/members
[stars-shield]: https://img.shields.io/github/stars/JustinStowe/MyMovieTracker.svg?style=for-the-badge
[stars-url]: https://github.com/JustinStowe/MyMovieTracker/stargazers
[issues-shield]: https://img.shields.io/github/issues/JustinStowe/MyMovieTracker.svg?style=for-the-badge
[issues-url]: https://github.com/JustinStowe/MyMovieTracker/issues
[license-shield]: https://img.shields.io/github/license/JustinStowe/MyMovieTracker.svg?style=for-the-badge
[license-url]: https://github.com/JustinStowe/MyMovieTracker/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555

[linkedin-url]: https://linkedin.com/in/JustinStowe
[product-screenshot]: https://user-images.githubusercontent.com/110639329/233697716-7af1e6f7-e7fa-4ec4-921a-71885c443309.jpg
[Express.js]: https://img.shields.io/badge/-Express-green
[Express-url]:https://expressjs.com/
[mongo.js]: https://img.shields.io/badge/-MongoDB-blue
[mongo-url]: https://www.mongodb.com/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
