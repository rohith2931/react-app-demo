import {Link,Outlet} from 'react-router-dom'
function technologies(){
    return(
        <div>
            <h1>Technologies</h1>
            <ul className="nav justify-content-center">
                <li className="nav-item ">
                    <Link className="nav-link" to="html">HTML</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="javascript">Javascript</Link>
                </li>
            </ul>
            <Outlet/>
        </div>
    )
}
export default technologies