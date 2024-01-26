# YouTube Clone Application

## Overview
This React-based YouTube clone application enables users to explore a variety of videos, view detailed information about individual videos and channels, and search for specific content. Leveraging React Router for seamless navigation and Material-UI for an enhanced visual experience, the application offers a responsive and user-friendly interface.

## Getting Started
To run the application locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/ToshePanov/youtubeClone
   ```

2. Navigate to the project directory:
   ```bash
   cd youtubeClone
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open your browser and go to [http://localhost:3000](http://localhost:3000) to view the application.

## Project Structure
The project is organized as follows:

- **src/components**: Houses React components for different features.
  - **Navbar**: Navigation bar for seamless user navigation.
  - **Feed**: Component displaying the video feed.
  - **VideoDetail**: Component for detailed information about a video.
  - **ChannelDetail**: Component for detailed information about a channel.
  - **SearchFeed**: Component displaying search results.
  - **Sidebar**: Sidebar for category selection.
  - **Videos**: Component for displaying a list of videos or channels.
  - **VideoCard**: Component for displaying a video card.
  - **Loader**: Loading spinner component.
  - **SearchBar**: Component for the search bar.

- **src/utils**: Contains utility functions.
  - **fetchFromAPI**: Function for making API requests.
  - **constants**: Store with required help/error information.

- **src/App.js**: Main application component with routing.

## Dependencies
- `react`
- `react-router-dom`
- `@mui/material`
- `@mui/icons-material`

## Usage
- Explore videos by category using the video feed.
- Click on a video to view detailed information.
- Discover and explore channels.
- Utilize the search bar to find specific content.

## Contributing
Contributions are welcome! Feel free to open issues or submit pull requests. Your efforts will be highly appreciated.

## License
This project is licensed under the [MIT License](LICENSE).

## Author
[Toshe Panov](https://github.com/ToshePanov)

---

Feel free to tailor the README to match your specific project details and preferences.