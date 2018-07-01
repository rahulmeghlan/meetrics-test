/************************************************************************************************
 *                                                                                              *
 *                              VARIABLES DECLARATION                                           *
 *                                                                                              *
 ************************************************************************************************/
(function () {
    /**
     * Create & Init scope variable of the closure
     * */
    var adIsViewable = false,
        viewabilityTime = 0,
        viewabilityPercentage = 0,
        clickCount = 0,
        isWindowInFocus = true;

    /**
     * Calculate viewability Percentage, viewability state and viewabilityTime and
     * set the respective variable val
     *
     * */
    function checkViewAbility() {
        var adElement = document.getElementById("ad"),
            adElementDimensions = adElement.getBoundingClientRect(),
            adElementViewAreaVertical = adElementDimensions.top + window.scrollY;

        if (window.scrollY < adElementDimensions.height + adElementViewAreaVertical
            && Math.abs(adElementDimensions.left) < adElementDimensions.width) {
            adIsViewable = true;
            viewabilityTime += 0.5;
            var viewableY = adElementDimensions.height + adElementDimensions.top;
            var viewableX = adElementDimensions.width + adElementDimensions.left;
            var baseY = adElementDimensions.top < 0 ? adElementDimensions.height : adElementDimensions.height + adElementDimensions.top;
            var baseX = adElementDimensions.left < 0 ? adElementDimensions.width : adElementDimensions.width + adElementDimensions.left;
            viewabilityPercentage = parseInt(((viewableX * viewableY) / (baseX * baseY)) * 100);
        } else {
            adIsViewable = false;
            viewabilityPercentage = 0;
        }
    }

    /**
     * Track clicks and update clickCount variable val
     * */
    function trackClickCount() {
        ++clickCount;
    }

    /**
     * A function where events are bind to the respective event handlers
     * */
    function bindEvents() {
        //Bind click to ad element
        document.getElementById('ad').addEventListener('click', trackClickCount);

        //Window Blur Event to update windowInFocus state
        window.addEventListener('blur', function () {
            isWindowInFocus = false;
        });

        //Window Focus Event to update windowInFocus state
        window.addEventListener('focus', function () {
            isWindowInFocus = true;
        });
    }

    // Init the bindEvents function
    bindEvents();

    /**
     * Logs the viewability values in the console
     *
     * @override
     */
    window.log = function () {
        if (isWindowInFocus) {
            checkViewAbility();
        }
        console.log("Ad is viewable: ", adIsViewable, "\nViewability time of the ad in sec:", viewabilityTime, "\nViewability percentage:", viewabilityPercentage, "\nTotal Clicks:", clickCount);
    };
})();

/************************************************************************************************
 *                                                                                              *
 *                              YOUR IMPLEMENTATION                                             *
 *                                                                                              *
 ************************************************************************************************/
