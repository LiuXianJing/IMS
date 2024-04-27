import { useEffect } from "react";
import { BrowserRouter, Routes, Route, } from "react-router-dom"
import { ConfigProvider } from 'antd'
import enUS from 'antd/locale/en_US';
import Header from './views/Header'
import QueryTable from './views/QueryTable'
import ProMenu from './views/Menu'
import RecordVideo from './views/RecordVideo'
import AIGCIntroduction from './views/AIGC/Introduction'
import AIGCBusinessLayout from './views/AIGC/BusinessLayout'
import CharacterIntroduction from './views/Entertainment/CharacterIntroduction'
import TFWebsites from "./views/Technology/Frontend/Websites";
import TFProgrammingLanguage from "./views/Technology/Frontend/ProgrammingLanguage";
import TFFrame from "./views/Technology/Frontend/Frame";
import DashBoardOverview from "./views/DashBoard/Overview";
import FoodsMilkPowder from "./views/Foods/MilkPowder";
import AboutMe from "./views/About/AboutMe";
import AboutIMS from "./views/About/AboutIMS";
import UserManagement from "./views/UsersManagement";
import IpInfo from "./views/IpInfo";
import VisualLargeScreen from "./views/VisualLargeScreen";
import Other from "./views/Other";
import ChatChat from "./views/ChatChat";
import majesticMusic from './assets/audio/majestic_music.mp3'
import PlayGame from "./views/Game/PlayGame";
import './App.less'

function App() {

    return  <>
        <BrowserRouter future={{ v7_startTransition: true }}>
            <ConfigProvider locale={enUS}>
                <div style={{display: "none"}}>
                    <h4>IMS Audio</h4>
                    <audio className="ims-audio" src={majesticMusic} loop muted>
                        Audio
                    </audio>
                </div>
                <Header />
                <div className='main-container'>
                    <ProMenu></ProMenu>
                    <div className='pro-content'>
                        <Routes>
                            <Route path="dash_board_overview" element={<DashBoardOverview />}></Route>
                            <Route path='record_video' element={<RecordVideo />} />
                            <Route path='query_table' element={<QueryTable />} />
                            {/* AIGC */}
                            <Route path='aigc'>
                                <Route path='introduction' element={<AIGCIntroduction />}></Route>
                                <Route path='business_layout' element={<AIGCBusinessLayout />}></Route>
                            </Route>
                            {/* technology */}
                            <Route path="technology">
                                <Route path="frontend">
                                    <Route path="frame" element={<TFFrame />}></Route>
                                    <Route path="programming_language" element={<TFProgrammingLanguage />}></Route>
                                    <Route path="websites" element={<TFWebsites />}></Route>
                                </Route>
                            </Route>
                            {/* Entertainment */}
                            <Route path='entertainment'>
                                <Route path='character_introduction' element={<CharacterIntroduction />}></Route>
                                <Route path='record_vodeo' element={<RecordVideo />} />
                            </Route>
                            <Route path="foods">
                                <Route path="milk_powder" element={<FoodsMilkPowder />}></Route>
                            </Route>
                            <Route path="about">
                                <Route path="me" element={<AboutMe />}></Route>
                                <Route path="ims" element={<AboutIMS />}></Route>
                            </Route>
                            <Route path='user-management' element={<UserManagement />} />
                            <Route path='visual_large_screen' element={<VisualLargeScreen />} />
                            <Route path="ip_info" element={<IpInfo />} />
                            <Route path='/chat_chat' element={<ChatChat />} />
                            <Route path="other" element={<Other />} />
                            <Route path='/' element={<DashBoardOverview />} />
                            <Route path='game'>
                                <Route path='play_game' element={<PlayGame />} />
                            </Route>
                        </Routes>
                    </div>
                </div>
            </ConfigProvider>
        </BrowserRouter>
    </>
}

export default App
