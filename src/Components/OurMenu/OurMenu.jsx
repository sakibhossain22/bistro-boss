import ChefServIce from "../Home/ChefService/ChefServIce";
import MenuItem from "../Home/Menu/MenuItem";
import SectionTitle from "../Shared/SectionTiitle/SectionTitle";
import SharedCover from "../Shared/SharedCover/SharedCover";
import ChefSharedMenu from "../Shared/chefSharedMenu/chefSharedMenu";
import useMenu from "../Shared/useMenu/useMenu";

const OurMenu = () => {
    const [menu] = useMenu()
    const offered = menu.filter(menu => menu.category === 'offered')
    const dessert = menu.filter(menu => menu.category === 'dessert')
    const pizza = menu.filter(menu => menu.category === 'pizza')
    const salad = menu.filter(menu => menu.category === 'salad')
    const soup = menu.filter(menu => menu.category === 'soup')
    console.log(dessert);

    return (
        <div>
            <SharedCover header='OUR MENU' subHeader='Would you like to try a dish?'></SharedCover>
            <SectionTitle heading='---Dont miss' subHeading='TODAYS OFFER'></SectionTitle>
            {/* Offered */}
            <div className="mx-6 my-10">
                <div>
                    <div className="grid grid-cols-2 gap-10">
                        {
                            offered?.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                        }
                    </div>

                </div>
                {/* Dessert */}
                <div>
                    <ChefSharedMenu heading='DESSERTS' subHeading='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'></ChefSharedMenu>
                    <div className="grid grid-cols-2 gap-10">
                        {
                            dessert?.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                        }
                    </div>
                </div>
                {/* Pizza */}
                <div>
                    <ChefSharedMenu heading='PIZZA' subHeading='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'></ChefSharedMenu>
                    <div className="grid grid-cols-2 gap-10">
                        {
                            pizza?.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                        }
                    </div>
                </div>
                {/* Salad */}
                <div>
                    <ChefSharedMenu heading='SALAD' subHeading='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'></ChefSharedMenu>
                    <div className="grid grid-cols-2 gap-10">
                        {
                            salad?.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                        }
                    </div>
                </div>
                {/* Salad */}
                <div>
                    <ChefSharedMenu heading='SOUP' subHeading='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'></ChefSharedMenu>
                    <div className="grid grid-cols-2 gap-10">
                        {
                            soup?.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                        }
                    </div>
                </div>
            </div>
        </div>

    );
};

export default OurMenu;