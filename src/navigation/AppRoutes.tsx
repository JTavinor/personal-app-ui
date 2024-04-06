import { Route, Routes } from "react-router-dom";

const AppRoutes = () => {
    return ( <Routes>
        <Route path='/path1' element
        ={<h1>hello</h1>}/>
        <Route path='/path2' element
        ={<h1>goodbye</h1>}/>
    </Routes > );
}
 
export default AppRoutes;