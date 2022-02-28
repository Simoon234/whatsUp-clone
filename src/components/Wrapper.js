import {useDispatch, useSelector} from "react-redux";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Sidebars} from "./Sidebars";
import {Chat} from "./Chat";
import {Login} from "./Login";
import {selectUserName} from "../features/user";

export const LoginScreen = () => {
    const userName = useSelector(selectUserName);

    return (
        <div>
            <div className='app'>
                {!userName ? <Login/> : (
                    <div className='app__body'>
                        <Router>
                            <Routes element={<Sidebars/>}>
                                <Route path='/' element={<Sidebars/>}/>
                                <Route path='/rooms/:roomId' element={<> <Sidebars/> <Chat/></>}/>
                            </Routes>
                        </Router>
                    </div>
                )}
            </div>
        </div>
    )
}

