import Home from '../components/portfolioContainer/Home/Home'
import AboutMe from '../components/portfolioContainer/AboutMe/AboutMe'

export const TOTAL_SCREENS = [
    {
        screen_name: "Home",
        component: Home,
    },
    {
        screen_name: "AboutMe",
        component: AboutMe,
    },

];

export const GET_SCREEN_INDEX = (screen_name) => {
    if(!screen_name) return -1;

    for(let i = 0; i< TOTAL_SCREENS.length; i++) {
        if(TOTAL_SCREENS[i].screen_name === screen_name) return i;
    }
    
    return -1
};