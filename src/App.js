import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { Box } from '@mui/material';
import { Navbar, Feed, ChannelDetail, SearchFeed, VideoDetail, SideBar} from './components';

const App = () => (
    <BrowserRouter>
      <Box sx={{ backgroundColor: 'rgb(10, 19, 48)' }}>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Feed />} />
          <Route path="/video/:id" element={<VideoDetail />} />
          <Route path="/channel/:id" element={<ChannelDetail />} />
          <Route path="/search/:searchTerm" element={<SearchFeed/>} />
        </Routes>
      </Box>
    </BrowserRouter>
  );

export default App
