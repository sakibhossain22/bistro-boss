import { useEffect, useState } from "react";
import MenuItem from "./MenuItem";

const Menu = () => {
    const [menus, setMenus] = useState([])
    console.log(menus);
    useEffect(()=> {
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const filter = data.filter(item => item.category == 'salad')
            setMenus(filter);
        })
    },[])
    return (
        <div className="my-10">
            <div className="grid grid-cols-2 gap-10">
                {
                    menus?.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
        </div>
    );
};

export default Menu;