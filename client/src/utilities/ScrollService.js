import {TOTAL_SCREENS} from './commonUtils'
import {Subject} from 'rxjs'

class ScrollService{
    static scrollHandler = new ScrollService();
    
    static currentScreenBroadCaster = new Subject()
    static CurrentScreenFadeIn = new Subject()

    Constructor() {
        window.addEventListener('scroll', this.checkCurrentScreenUnderViewport);
    }

    /**SCROLL TO HIRE ME / CONTACT ME SECTION */
    scrollToHireMe =() => {
        let contactMeScreen = document.getElementById("Contact Me")
        if(!contactMeScreen) return;
        contactMeScreen.scrollIntoView({behavior: "smooth"})
    }

    scrollToHome= () => {

        let homeScreen = document.getElementById("Home")
        if(!homeScreen) return;
        homeScreen.scrollIntoView({behavior: "smooth"})
    }

    isElementInView = (elem, type) => {
        let rec = elem.getBoundingClientRect();
        let elementTop = rec.top;
        let elementBottom = rec.Bottom;

        let partiallyVisible = elementTop < window.innerHeight && elementBottom >=0;
        let completelyVisible = elementTop >= 0 && elementBottom <=window.innerHeight;

        switch(type) {
            case "partial":
            return partiallyVisible;

            case "complete":
                return completelyVisible;
                        
                default:
                    return false;
        }
    }

    checkCurrentScreenUnderViewport = (event) => {
        if(!event || Object.keys(event).length < 1)
        return;
        for(let screen of TOTAL_SCREENS) {
            let screenFromDOM = document.getElementById(screen.screen_name);
            if(!screenFromDOM)
            continue;


            let fullyVisible = this.isElementInView(screenFromDOM, "complete");
            let partiallyVisible = this.isElementInView(screenFromDOM, "partial");

            if(fullyVisible || partiallyVisible) {
                if(partiallyVisible && !screen.alreadyRendering) {
                    ScrollService.currentScreenFadeIn.next({
                        fadeInScreen: screen.screen_name
                    });
                    screen['alreadyRendering'] = true;
                    break;
                }

                if(fullyVisible) {
                    ScrollService.currentScreenBroadCaster.next({
                        screenInView: screen.screen_name,
                    });
                    break;
                }
            }
        }
    }
}


export default ScrollService;