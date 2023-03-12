
document.addEventListener("DOMContentLoaded", function (event) {

    (function () {

        // Init
        let container = document.querySelector(".cardHeader");
        let inner = document.querySelector(".card");
        let cardColor = document.querySelector(".colorCard");

        // Color effects
        let items = document.querySelectorAll(".c");
        items.forEach((item) => {
            item.addEventListener('mouseenter', (event) => {
                inner.closest(".cardHeader").onmouseover = function (event) {
                    cardColor.style.opacity = 1;
                };

                inner.closest(".cardHeader").onmouseout = function (event) {
                    cardColor.style.opacity = 0;
                };
            });
        });

        let coords = cardColor.getBoundingClientRect();
        let j = coords.top; // estamos obteniendo la posicion top en numero
        let k = coords.left;

        // Mouse
        let mouse = {
            _x: 0,
            _y: 0,
            x: 0,
            y: 0,
            m: 0,
            n: 0,
            updatePosition: function (event) {
                let e = event || window.event;
                this.x = e.clientX - this._x;
                this.y = (e.clientY - this._y) * -1;
                this.m = e.pageY - j;
                this.n = e.pageX - k;
            },
            setOrigin: function (e) {
                this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
                this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
            },
            show: function () {
                return "(" + this.x + ", " + this.y + ")";
            }
        };

        let a = mouse;

        // Track the mouse position relative to the center of the container.
        mouse.setOrigin(container);

        let counter = 0;
        let refreshRate = 10;
        let isTimeToUpdate = function () {
            return counter++ % refreshRate === 0;
        };

        let onMouseEnterHandler = function (event) {
            update(event);
        };

        let onMouseLeaveHandler = function () {
            inner.style = "";
            a.style = "";
        };

        let onMouseMoveHandler = function (event) {
            if (isTimeToUpdate()) {
                update(event);
            }
        };

        let update = function (event) {
            mouse.updatePosition(event);
            updateTransformStyle(
                (mouse.y / inner.offsetHeight / 2).toFixed(2),
                (mouse.x / inner.offsetWidth / 2).toFixed(2)
            );
        };

        let updateTransformStyle = function (x, y) {
            let style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
            inner.style.transform = style;

            let style2 = "translate(" + (a.n - 60) + "px, " + (a.m - 60) + "px)";
            cardColor.style.transform = style2;
            // console.log(style2)

            inner.style.webkitTransform = style;
            inner.style.mozTranform = style;
            inner.style.msTransform = style;
            inner.style.oTransform = style;
        };

        container.onmousemove = onMouseMoveHandler;
        container.onmouseleave = onMouseLeaveHandler;
        container.onmouseenter = onMouseEnterHandler;
    })();

});
