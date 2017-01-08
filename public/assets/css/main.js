import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "container row": {
        "marginTop": 0,
        "marginRight": -15,
        "marginBottom": 0,
        "marginLeft": -15
    },
    "col-xxs-1": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 15,
        "float": "left"
    },
    "col-xxs-2": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 15,
        "float": "left"
    },
    "col-xxs-3": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 15,
        "float": "left"
    },
    "col-xxs-4": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 15,
        "float": "left"
    },
    "col-xxs-5": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 15,
        "float": "left"
    },
    "col-xxs-6": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 15,
        "float": "left"
    },
    "col-xxs-7": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 15,
        "float": "left"
    },
    "col-xxs-8": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 15,
        "float": "left"
    },
    "col-xxs-9": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 15,
        "float": "left"
    },
    "col-xxs-10": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 15,
        "float": "left"
    },
    "col-xxs-11": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 15,
        "float": "left"
    },
    "col-xxs-12": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 15,
        "float": "left"
    },
    "visible-xxs": {
        "display": "none !important"
    },
    "input-field input[type=text]:focus + label": {
        "color": "#F77C00"
    },
    "small-text": {
        "fontSize": 1
    },
    "fadeInUpSmall": {
        "WebkitAnimationName": "fadeInUpSmall",
        "animationName": "fadeInUpSmall"
    },
    "fadeOutUpSmall": {
        "WebkitAnimationName": "fadeOutUpSmall",
        "animationName": "fadeOutUpSmall"
    },
    "html": {
        "color": "#666",
        "fontSize": 14,
        "lineHeight": 2,
        "width": "100%",
        "height": "100%",
        "fontFamily": "\"Roboto\", sans-serif"
    },
    "button": {
        "color": "#666"
    },
    "input": {
        "color": "#666"
    },
    "select": {
        "color": "#666"
    },
    "textarea": {
        "color": "#666",
        "resize": "vertical"
    },
    "body": {
        "fontSize": 14,
        "lineHeight": 2,
        "color": "#666",
        "width": "100%",
        "height": "100%",
        "fontFamily": "\"Roboto\", sans-serif",
        "overflow": "hidden",
        "position": "fixed"
    },
    "p": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 25,
        "marginLeft": 0
    },
    "img": {
        "maxWidth": "100%",
        "verticalAlign": "middle"
    },
    "a": {
        "textDecoration": "none",
        "outline": "none !important",
        "WebkitTransition": "all .3s ease",
        "transition": "all .3s ease"
    },
    "a:hover": {
        "textDecoration": "none",
        "outline": "none !important",
        "backgroundColor": "#F77C00 !important",
        "color": "white"
    },
    "a:visited": {
        "textDecoration": "none",
        "outline": "none !important"
    },
    "a:focus": {
        "textDecoration": "none",
        "outline": "none !important"
    },
    "a:active": {
        "textDecoration": "none",
        "outline": "none !important"
    },
    "bg-white": {
        "backgroundColor": "#fff !important"
    },
    "text-center": {
        "textAlign": "center"
    },
    "h1": {
        "lineHeight": 1.2,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "h2": {
        "lineHeight": 1.2,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "h3": {
        "lineHeight": 1.2,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "h4": {
        "lineHeight": 1.5,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "h5": {
        "lineHeight": 1.5,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "h6": {
        "lineHeight": 1.5,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "ul": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "ol": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "iframe": {
        "border": "none"
    },
    "::-moz-selection": {
        "background": "#b3d4fc",
        "textShadow": "none"
    },
    "::selection": {
        "background": "#b3d4fc",
        "textShadow": "none"
    },
    "hr": {
        "display": "block",
        "height": 1,
        "border": 0,
        "borderTop": "1px solid #ccc",
        "marginTop": 1,
        "marginRight": 0,
        "marginBottom": 1,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "audio": {
        "verticalAlign": "middle"
    },
    "canvas": {
        "verticalAlign": "middle"
    },
    "video": {
        "verticalAlign": "middle"
    },
    "fieldset": {
        "border": 0,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "browsehappy": {
        "marginTop": 0.2,
        "marginRight": 0,
        "marginBottom": 0.2,
        "marginLeft": 0,
        "background": "#ccc",
        "color": "#000",
        "paddingTop": 0.2,
        "paddingRight": 0,
        "paddingBottom": 0.2,
        "paddingLeft": 0
    },
    "big": {
        "fontSize": 2
    },
    "cap-text": {
        "textTransform": "uppercase"
    },
    "th-btn": {
        "outline": "none",
        "display": "inline-block",
        "lineHeight": 1,
        "border": "none",
        "borderRadius": 0,
        "fontSize": 16,
        "height": "auto"
    },
    "th-btn-default": {
        "color": "#fff !important",
        "borderColor": "#fff",
        "background": "#666"
    },
    "th-btn-big": {
        "paddingTop": 17,
        "paddingRight": 43,
        "paddingBottom": 16,
        "paddingLeft": 43
    },
    "th-btn-medium": {
        "paddingTop": 16,
        "paddingRight": 30,
        "paddingBottom": 15,
        "paddingLeft": 30,
        "fontSize": 14,
        "textTransform": "uppercase"
    },
    "th-btn-small": {
        "paddingTop": 11,
        "paddingRight": 16,
        "paddingBottom": 10,
        "paddingLeft": 16,
        "fontSize": 13
    },
    "btn-plain": {
        "background": "#fff",
        "boxShadow": "none !important",
        "paddingLeft": 0,
        "fontWeight": "700"
    },
    "btn-plain:hover": {
        "paddingLeft": 16,
        "color": "#fff !important"
    },
    "blockquote": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": "none"
    },
    "mainmain": {
        "position": "relative",
        "zIndex": 888
    },
    "integration-wrapper": {
        "width": "100%",
        "overflow": "hidden",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "integration": {
        "display": "flex",
        "WebkitBoxAlign": "center",
        "WebkitAlignItems": "center",
        "MsFlexAlign": "center",
        "alignItems": "center",
        "paddingTop": 40,
        "paddingRight": 0,
        "paddingBottom": 40,
        "paddingLeft": 0
    },
    "grid": {
        "textAlign": "center",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 20,
        "marginLeft": 0
    },
    "grid__item": {
        "display": "inline-block",
        "height": 100,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 10,
        "marginLeft": 0,
        "verticalAlign": "top",
        "overflow": "hidden"
    },
    "grid__item a": {
        "display": "flex",
        "WebkitBoxAlign": "center",
        "WebkitAlignItems": "center",
        "MsFlexAlign": "center",
        "alignItems": "center",
        "color": "#333",
        "WebkitBoxPack": "center",
        "WebkitJustifyContent": "center",
        "MsFlexPack": "center",
        "justifyContent": "center",
        "width": 150,
        "height": 100,
        "maxWidth": 150,
        "fontSize": 17,
        "marginTop": 0,
        "marginRight": 10,
        "marginBottom": 10,
        "marginLeft": 0,
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "textAlign": "center",
        "background": "#fff",
        "border": "2px solid #F3F3F3",
        "borderRadius": 6,
        "textDecoration": "none"
    },
    "grid__item a:hover": {
        "borderColor": "#F77C00"
    },
    "hidden-overflow": {
        "overflow": "hidden"
    },
    "overlay": {
        "position": "absolute",
        "width": "100%",
        "height": "90%",
        "top": 0,
        "left": 0,
        "backgroundColor": "rgba(247, 124, 0, .3)"
    },
    "overlay-img": {
        "position": "absolute",
        "width": "100%",
        "height": "90%",
        "top": 0,
        "left": 0,
        "backgroundImage": "url('/img/jlabdemo.jpg')",
        "backgroundSize": "cover",
        "backgroundRepeat": "no-repeat",
        "backgroundPosition": "center center"
    },
    "overlay-content": {
        "position": "relative",
        "zIndex": 1
    },
    "section-head": {
        "marginBottom": 83,
        "lineHeight": 2.2
    },
    "section-headonly-title": {
        "marginBottom": 66
    },
    "section-title": {
        "fontSize": 36,
        "lineHeight": 1.2
    },
    "section-titletitle-1": {
        "marginBottom": 33,
        "color": "#222",
        "fontWeight": "900",
        "textTransform": "uppercase"
    },
    "section-titletitle-2": {
        "marginBottom": 28,
        "color": "#333",
        "fontWeight": "300"
    },
    "section-titletitle-3": {
        "marginBottom": 33,
        "color": "#222",
        "fontWeight": "900",
        "fontSize": 30
    },
    "section-titlewhite": {
        "color": "#fff"
    },
    "section-space": {
        "paddingTop": 115,
        "paddingRight": 0,
        "paddingBottom": 115,
        "paddingLeft": 0
    },
    "sectionwhy": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 115,
        "paddingLeft": 0
    },
    "section-space-top": {
        "paddingTop": 120
    },
    "section-space-bottom": {
        "paddingBottom": 120
    },
    "parallux-bg": {
        "backgroundAttachment": "fixed",
        "backgroundSize": "cover !important",
        "backgroundRepeat": "no-repeat",
        "width": "100%"
    },
    "section-bg-01": {
        "backgroundColor": "#f7f7f7"
    },
    "section-bg-02": {
        "backgroundColor": "#fff"
    },
    "section-bg-03": {
        "backgroundColor": "#000"
    },
    "color-white": {
        "color": "#fff !important"
    },
    "color-black": {
        "color": "#666 !important"
    },
    "container-width": {
        "width": 1420,
        "maxWidth": "100%",
        "position": "relative",
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "paddingTop": 0,
        "paddingRight": 45,
        "paddingBottom": 0,
        "paddingLeft": 45
    },
    "container-width container": {
        "maxWidth": "100%"
    },
    "slider-arrow": {
        "position": "absolute",
        "fontSize": 30,
        "color": "#d0d0d0",
        "width": 40,
        "height": 40,
        "lineHeight": 40,
        "textAlign": "center",
        "top": "50%",
        "marginTop": -20
    },
    "slider-arrowright-arrow": {
        "right": 0
    },
    "slider-arrowleft-arrow": {
        "left": 0
    },
    "slider-arrowright-arrow:hover": {
        "backgroundColor": "transparent !important"
    },
    "slider-arrowleft-arrow:hover": {
        "backgroundColor": "transparent !important"
    },
    "slider-arrowright-arrowapp-brief-arrow": {
        "right": 25
    },
    "slider-arrowleft-arrowapp-brief-arrow": {
        "left": 25
    },
    "th-btn-orange": {
        "backgroundColor": "#fff",
        "color": "#f77c00"
    },
    "loader": {
        "position": "fixed",
        "top": 0,
        "left": 0,
        "width": "100%",
        "height": "100%",
        "zIndex": 99999,
        "backgroundColor": "#fff"
    },
    "loader-content": {
        "textAlign": "center",
        "position": "relative",
        "top": "50%",
        "marginTop": -50,
        "height": 103
    },
    "loading-title": {
        "color": "#333"
    },
    "loader preloader-wrapper": {
        "marginBottom": 30
    },
    "main-header": {
        "position": "fixed",
        "width": "100%",
        "zIndex": 999,
        "top": 0,
        "left": 0,
        "boxShadow": "0px 0px 5px rgba(0, 0, 0, 0.3)",
        "height": "auto !important"
    },
    "header-big-screen": {
        "backgroundColor": "#fff"
    },
    "main-headermobileBG full-height": {
        "height": "100%"
    },
    "logo": {
        "float": "left",
        "display": "inline-block",
        "maxWidth": 310,
        "paddingTop": 19,
        "paddingRight": 0,
        "paddingBottom": 19,
        "paddingLeft": 0
    },
    "menu": {
        "float": "right",
        "background": "transparent",
        "width": "auto",
        "height": "auto",
        "lineHeight": "inherit",
        "boxShadow": "none"
    },
    "menu li": {
        "listStyle": "none",
        "position": "relative",
        "background": "none !important",
        "display": "inline-block",
        "marginLeft": 15,
        "float": "none"
    },
    "menu li a": {
        "display": "block",
        "outline": "none !important",
        "fontSize": 13,
        "color": "#727272",
        "paddingTop": 30,
        "paddingRight": 8,
        "paddingBottom": 26,
        "paddingLeft": 8,
        "lineHeight": 1,
        "textTransform": "uppercase",
        "borderBottom": "6px solid transparent"
    },
    "menu lihas-sub a": {
        "borderColor": "transparent !important"
    },
    "menu lihas-sub > a:after": {
        "content": "\\f107",
        "fontFamily": "FontAwesome",
        "fontSize": "inherit",
        "textRendering": "auto",
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "display": "inline-block",
        "marginLeft": 10
    },
    "menu li sub-menu": {
        "position": "absolute",
        "background": "#fff",
        "width": 200,
        "right": 0,
        "boxShadow": "0px 3px 3px -2px rgba(0, 0, 0, 0.2)",
        "visibility": "hidden",
        "opacity": 0,
        "filter": "alpha(opacity=0)",
        "WebkitTransition": "all .3s",
        "transition": "all .3s",
        "borderTop": "6px solid transparent",
        "top": "100%",
        "marginTop": -6,
        "paddingTop": 6
    },
    "menu li sub-menu li": {
        "width": "100%",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "menu li sub-menu li a": {
        "paddingTop": 17,
        "paddingRight": 25,
        "paddingBottom": 15,
        "paddingLeft": 25,
        "border": "none"
    },
    "menu li:hover sub-menu": {
        "visibility": "visible",
        "opacity": 1,
        "filter": "alpha(opacity=100)"
    },
    "mobileBG header-mobile-screen header-inner": {
        "paddingBottom": 63
    },
    "main-headermobileBG": {
        "top": "0px !important",
        "height": "auto !important"
    },
    "header-mobile-screen logo-area": {
        "background": "#fff"
    },
    "header-mobile-screen logo-area logo": {
        "marginBottom": 0
    },
    "header-mobile-screen bar-area": {
        "marginTop": 25,
        "position": "relative"
    },
    "header-mobile-screen bar-area a": {
        "fontSize": 25,
        "lineHeight": 1,
        "display": "block"
    },
    "header-mobile-screen bar-area aclose-menu": {
        "display": "none"
    },
    "header-mobile-screen menu": {
        "textAlign": "left",
        "display": "none",
        "overflow": "auto",
        "overflowX": "hidden",
        "maxHeight": "100%",
        "paddingLeft": 15,
        "paddingRight": 15,
        "marginTop": 15,
        "paddingBottom": 15
    },
    "header-mobile-screen menu li": {
        "display": "block",
        "marginLeft": 0,
        "paddingLeft": 20,
        "paddingRight": 20
    },
    "header-mobile-screen menu li:hover": {
        "backgroundColor": "#fff !important"
    },
    "header-mobile-screen menu licurrent": {
        "backgroundColor": "#fff !important"
    },
    "header-mobile-screen menu li:last-child": {
        "borderBottom": "none"
    },
    "header-mobile-screen menu li a": {
        "color": "#fff",
        "fontSize": 14,
        "paddingTop": 21,
        "paddingRight": 0,
        "paddingBottom": 18,
        "paddingLeft": 0,
        "border": "none",
        "position": "relative"
    },
    "header-mobile-screen sub-menu li a": {
        "paddingTop": 14,
        "paddingRight": 0,
        "paddingBottom": 13,
        "paddingLeft": 0,
        "fontSize": 13
    },
    "header-mobile-screen menu lihas-sub > a:after": {
        "position": "absolute",
        "right": 0,
        "WebkitTransform": "rotate(-90deg)",
        "MsTransform": "rotate(-90deg)",
        "transform": "rotate(-90deg)"
    },
    "header-mobile-screen menu lihas-subactive > a:after": {
        "WebkitTransform": "rotate(0deg)",
        "MsTransform": "rotate(0deg)",
        "transform": "rotate(0deg)"
    },
    "header-mobile-screen menu li sub-menu": {
        "position": "relative",
        "borderTop": "none",
        "width": "100%",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 20,
        "paddingLeft": 0,
        "display": "none",
        "visibility": "visible",
        "opacity": 1,
        "filter": "alpha(opacity=100)",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "header-mobile-screen menu li sub-menu li": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "iframegiphy-embed": {
        "width": "100%"
    },
    "banner": {
        "position": "relative",
        "minHeight": "100%",
        "paddingTop": 189,
        "paddingBottom": 90
    },
    "banner heading": {
        "fontSize": 50,
        "color": "#fff",
        "lineHeight": 1.18,
        "marginBottom": 25,
        "letterSpacing": 2,
        "fontWeight": "bold"
    },
    "banner banner-content": {
        "marginBottom": 40
    },
    "banner button-area": {
        "display": "table",
        "width": "100%"
    },
    "banner button-area a": {
        "marginTop": 10,
        "marginRight": 10,
        "marginBottom": 10,
        "marginLeft": 10
    },
    "banner sub-heading": {
        "width": "100%",
        "color": "#fff",
        "wordSpacing": 3,
        "fontSize": 23,
        "fontWeight": "300",
        "lineHeight": 1.9
    },
    "banner sub-heading a": {
        "color": "#fff",
        "fontWeight": "400"
    },
    "intercom-container intercom-launcher-button": {
        "borderRadius": "50%",
        "position": "absolute",
        "bottom": 0,
        "right": 0,
        "width": 48,
        "height": 48,
        "cursor": "pointer",
        "backgroundPosition": "center",
        "backgroundColor": "#F77C00 !important",
        "border": "1px solid #f77c00 !important"
    },
    "home-bottom-content": {
        "position": "absolute",
        "width": "100%",
        "bottom": 0,
        "textAlign": "center",
        "borderBottom": "1px solid #e9e9e9",
        "overflow": "hidden"
    },
    "single-section": {
        "display": "inline-block",
        "paddingTop": 32,
        "paddingRight": 0,
        "paddingBottom": 28,
        "paddingLeft": 0,
        "borderRight": "1px solid #E9E9E9",
        "width": 300
    },
    "single-section:last-child": {
        "borderRight": "none"
    },
    "single-section i": {
        "marginLeft": 10
    },
    "single-section a": {
        "color": "#666"
    },
    "banner-feature": {
        "color": "#fff"
    },
    "banner-feature-list": {
        "display": "inline-block",
        "width": "10%",
        "minWidth": 175,
        "marginBottom": 50
    },
    "banner-feature-list i": {
        "fontSize": 30,
        "color": "#fff",
        "marginBottom": 25,
        "display": "inline-block",
        "lineHeight": 1
    },
    "banner-feature-list title": {
        "fontSize": 20,
        "fontWeight": "400"
    },
    "call-to-section": {
        "background": "#FFFFFF",
        "position": "relative",
        "zIndex": 2
    },
    "why-this-app section-space": {},
    "why-this-app section-title": {
        "marginBottom": 38
    },
    "why-section-col": {
        "display": "table-cell",
        "float": "none",
        "verticalAlign": "middle",
        "maxWidth": "50% !important"
    },
    "why-this-app p": {
        "marginBottom": 20
    },
    "why-slider": {
        "width": 556,
        "position": "relative",
        "overflow": "hidden",
        "marginTop": 10
    },
    "why-slider > *": {
        "marginTop": "0px !important",
        "position": "absolute !important",
        "width": "100%",
        "top": 0,
        "left": "100%",
        "overflow": "hidden"
    },
    "why-this-app thumb-area img:nth-child(2)": {
        "WebkitTransform": "translateX(200px)",
        "MsTransform": "translateX(200px)",
        "transform": "translateX(200px)",
        "WebkitTransition": "all 1s",
        "transition": "all 1s"
    },
    "why-this-app thumb-areaactive img:nth-child(2)": {
        "WebkitTransform": "translateX(0px)",
        "MsTransform": "translateX(0px)",
        "transform": "translateX(0px)"
    },
    "why-this-app thumb-areainactive img:nth-child(2)": {
        "WebkitTransform": "translateX(-50px)",
        "MsTransform": "translateX(-50px)",
        "transform": "translateX(-50px)"
    },
    "owl-carousel owl-item": {
        "overflow": "hidden"
    },
    "app-reasion-lists li": {
        "listStyle": "none",
        "marginBottom": 30,
        "minHeight": 60
    },
    "app-reasion-lists li a:focus": {
        "backgroundColor": "transparent",
        "color": "white"
    },
    "app-reasion-lists li:last-child": {
        "marginBottom": 0
    },
    "app-reasion-lists li a": {
        "display": "block",
        "position": "relative",
        "paddingLeft": 80
    },
    "app-reasion-lists li a:hover": {
        "backgroundColor": "transparent !important"
    },
    "app-reasion-lists li a left-area": {
        "fontSize": 24,
        "overflow": "hidden",
        "width": 60,
        "height": 60,
        "display": "inline-block",
        "background": "#fff",
        "borderRadius": "50%",
        "border": "none",
        "textAlign": "center",
        "lineHeight": 58,
        "position": "absolute",
        "top": 0,
        "left": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "WebkitTransition": "all .3s ease",
        "transition": "all .3s ease"
    },
    "app-reasion-lists li a:focus left-area": {
        "fontSize": 24,
        "overflow": "hidden",
        "width": 60,
        "height": 60,
        "display": "inline-block",
        "background": "#fff",
        "borderRadius": "50%",
        "border": "none",
        "textAlign": "center",
        "lineHeight": 58,
        "position": "absolute",
        "top": 0,
        "left": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "WebkitTransition": "all .3s ease",
        "transition": "all .3s ease"
    },
    "app-reasion-lists li a right-area": {
        "color": "#666"
    },
    "app-reasion-lists li a:hover left-area i": {
        "color": "#fff"
    },
    "app-reasion-lists liactive a left-area i": {
        "color": "#fff"
    },
    "app-reasion-lists liactive a:hover left-area i": {
        "color": "#fff"
    },
    "amazing-featuresection-space": {
        "paddingBottom": 90
    },
    "feature-lists-style-one feature-list": {
        "position": "relative",
        "marginBottom": 23
    },
    "feature-lists-style-one icon-area": {
        "width": 60,
        "color": "#fff",
        "height": 60,
        "lineHeight": 60,
        "borderRadius": "50%",
        "fontSize": 24,
        "textAlign": "center",
        "WebkitTransition": ".3s",
        "transition": ".3s",
        "float": "left",
        "marginRight": 20
    },
    "feature-lists-style-one icon-area i": {},
    "feature-lists-style-one f-content-area": {
        "overflow": "hidden"
    },
    "feature-lists-style-one title": {
        "fontSize": 18,
        "marginBottom": 13,
        "fontWeight": "400",
        "color": "#333",
        "marginTop": 2
    },
    "app-briefowl-carousel": {
        "backgroundColor": "#f7f7f7",
        "paddingBottom": 100
    },
    "thumb-area": {
        "position": "relative",
        "height": 474,
        "marginTop": 10
    },
    "thumb-area img": {
        "position": "relative",
        "top": 0
    },
    "app-brief-article content": {
        "WebkitTransition": "all 1.5s ease",
        "transition": "all 1.5s ease"
    },
    "app-brief-article thumb-area": {
        "WebkitTransition": "all 1.5s ease",
        "transition": "all 1.5s ease"
    },
    "app-briefowl-theme owl-controls owl-pagination owl-page span": {
        "width": 50,
        "height": 5,
        "marginTop": 0,
        "marginRight": 2,
        "marginBottom": 0,
        "marginLeft": 2,
        "opacity": 1,
        "filter": "alpha(opacity=100)",
        "borderRadius": 0,
        "background": "#ddd"
    },
    "left-item app-brief-article thumb-area": {
        "WebkitTransform": "translateX(-500px)",
        "MsTransform": "translateX(-500px)",
        "transform": "translateX(-500px)"
    },
    "right-item app-brief-article content": {
        "WebkitTransform": "translateX(500px)",
        "MsTransform": "translateX(500px)",
        "transform": "translateX(500px)"
    },
    "active app-brief-article thumb-area": {
        "WebkitTransform": "translateX(0%)",
        "MsTransform": "translateX(0%)",
        "transform": "translateX(0%)"
    },
    "active app-brief-article content": {
        "WebkitTransform": "translateX(0%)",
        "MsTransform": "translateX(0%)",
        "transform": "translateX(0%)"
    },
    "app-brief-article": {
        "paddingBottom": 110
    },
    "owl-item app-brief-article": {
        "paddingBottom": 40
    },
    "app-brief-article section-title": {
        "marginBottom": 40
    },
    "app-brief-article p": {
        "marginBottom": 20
    },
    "thumb-area img:nth-child(1)": {
        "zIndex": 2
    },
    "thumb-area img:nth-child(2)": {
        "right": 76,
        "position": "absolute",
        "top": 21
    },
    "content a": {},
    "content ul": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 30,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "content ul li:before": {
        "listStyle": "none",
        "content": "\\f474",
        "marginRight": 20,
        "display": "inline-block",
        "fontFamily": "Ionicons",
        "speak": "none",
        "fontSize": 18,
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "textRendering": "auto",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "verticalAlign": "middle"
    },
    "content ol": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 23,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "content ol li": {
        "WebkitPaddingStart": 12,
        "MozPaddingStart": 12
    },
    "content li": {
        "marginBottom": 5
    },
    "content ul li": {
        "listStyle": "none"
    },
    "statistics-01": {},
    "statistics-bg": {
        "backgroundImage": "url('../../img/bg-02.jpg')"
    },
    "statistics-01 section-space": {
        "paddingTop": 118,
        "paddingRight": 0,
        "paddingBottom": 64,
        "paddingLeft": 0
    },
    "statistic-area": {
        "position": "relative",
        "marginTop": 0,
        "marginRight": 30,
        "marginBottom": 0,
        "marginLeft": 30
    },
    "statistics-01 statistic-area": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 50,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": "!important",
        "paddingBottom": 0,
        "paddingLeft": "!important"
    },
    "statistics-01 top": {
        "lineHeight": 1,
        "marginBottom": 16
    },
    "statistics-01 i": {
        "fontSize": 50,
        "color": "#fff",
        "verticalAlign": "middle",
        "marginRight": 16
    },
    "statistics-01 number": {
        "fontSize": 40,
        "display": "inline-block",
        "verticalAlign": "middle",
        "fontWeight": "900"
    },
    "statistics-01 text": {
        "fontSize": 16,
        "color": "#fff",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "fontWeight": "300"
    },
    "screenshotsection-space": {
        "paddingBottom": 108
    },
    "screenshoot-wrapper": {
        "marginTop": 52
    },
    "screenshoot-area": {
        "position": "relative"
    },
    "screenshoot-area mobile-bg": {
        "position": "absolute",
        "top": -52,
        "left": "50%",
        "marginLeft": -122,
        "zIndex": 3
    },
    "screenshoot-slider": {
        "zIndex": 2
    },
    "screenshoot-slider owl-wrapper-outer": {
        "marginBottom": 100
    },
    "screenshoot-slider owl-item": {
        "WebkitTransition": "all .5s ease",
        "transition": "all .5s ease"
    },
    "screenshoot-slider owl-item img": {
        "width": "auto",
        "display": "inline-block",
        "maxWidth": "18%"
    },
    "screenshoot-slider owl-itemleft-item": {
        "paddingRight": 24,
        "textAlign": "left"
    },
    "screenshoot-slider owl-itemcenter-item": {
        "paddingTop": 0,
        "paddingRight": 12,
        "paddingBottom": 0,
        "paddingLeft": 12,
        "textAlign": "center"
    },
    "screenshoot-slider owl-itemright-item": {
        "paddingLeft": 24,
        "textAlign": "right"
    },
    "owl-theme owl-controls owl-pagination": {
        "textAlign": "center"
    },
    "owl-theme owl-controls owl-pagination owl-page": {
        "display": "inline-block"
    },
    "owl-theme owl-controls owl-pagination owl-page span": {
        "width": 12,
        "height": 12,
        "marginTop": 3,
        "marginRight": 3,
        "marginBottom": 3,
        "marginLeft": 3,
        "opacity": 1,
        "filter": "alpha(opacity=100)",
        "borderRadius": "50%",
        "background": "#bbb",
        "display": "block"
    },
    "screenshoot-arrow": {
        "marginTop": -88
    },
    "aslider-arrowright-arrowscreenshoot-arrow": {
        "right": "25%",
        "zIndex": 999
    },
    "aslider-arrowleft-arrowscreenshoot-arrow": {
        "left": "25%",
        "zIndex": 999
    },
    "_4-u8": {
        "backgroundColor": "#fff"
    },
    "_4-u2": {
        "border": "1px solid",
        "borderColor": "#e5e6e9 #dfe0e4 #d0d1d5",
        "borderRadius": 3
    },
    "mbm": {
        "marginBottom": 10
    },
    "_2iwo": {
        "height": 300,
        "paddingTop": 12,
        "paddingRight": 12,
        "paddingBottom": 12,
        "paddingLeft": 12
    },
    "_2iwq": {
        "WebkitAnimationDuration": "1s",
        "WebkitAnimationFillMode": "forwards",
        "WebkitAnimationIterationCount": "infinite",
        "WebkitAnimationName": "placeHolderShimmer",
        "WebkitAnimationTimingFunction": "linear",
        "background": "#f6f7f8",
        "backgroundImage": "linear-gradient(left, #f6f7f8 0%, #edeef1 20%, #f6f7f8 40%, #f6f7f8 100%)",
        "backgroundRepeat": "no-repeat",
        "backgroundSize": "800px 104px",
        "height": 104,
        "position": "relative"
    },
    "_2rtk _2iwq": {
        "WebkitAnimationName": "prideShimmer",
        "backgroundImage": "linear-gradient(135deg, red 0%, orange 15%, yellow 30%, green 45%, blue 60%,indigo 75%, violet 80%, red 100%)",
        "backgroundRepeat": "repeat",
        "backgroundSize": "50% auto"
    },
    "direction_rtl _2iwq": {
        "WebkitAnimationDirection": "reverse"
    },
    "_2iwq div": {
        "background": "#fff",
        "height": 6,
        "left": 0,
        "position": "absolute",
        "right": 0
    },
    "div_2iwr": {
        "height": 40,
        "left": 40,
        "right": "auto",
        "top": 0,
        "width": 8
    },
    "div_2iws": {
        "height": 8,
        "left": 48,
        "top": 0
    },
    "div_2iwt": {
        "left": 136,
        "top": 8
    },
    "div_2iwu": {
        "height": 12,
        "left": 48,
        "top": 14
    },
    "div_2iwv": {
        "left": 100,
        "top": 26
    },
    "div_2iww": {
        "height": 10,
        "left": 48,
        "top": 32
    },
    "div_2iwx": {
        "height": 20,
        "top": 40
    },
    "div_2iwy": {
        "left": 410,
        "top": 60
    },
    "div_2iwz": {
        "height": 13,
        "top": 66
    },
    "div_2iw-": {
        "left": 440,
        "top": 79
    },
    "div_2iw_": {
        "height": 13,
        "top": 85
    },
    "div_2ix0": {
        "left": 178,
        "top": 98
    },
    "video-sectionsection-space": {
        "paddingBottom": 120
    },
    "video-section section-head": {
        "marginBottom": 0
    },
    "video-buttons": {
        "marginTop": 40,
        "marginRight": -3,
        "marginBottom": -3,
        "marginLeft": -3
    },
    "video-buttons a": {
        "marginTop": 3,
        "marginRight": 3,
        "marginBottom": 3,
        "marginLeft": 3
    },
    "testimonial": {
        "color": "#ccc"
    },
    "testimonial-bg": {
        "backgroundImage": "url('../../img/bg-03.jpg')"
    },
    "testimonial section-space": {
        "paddingBottom": 111
    },
    "section-relative": {
        "position": "relative"
    },
    "single-testimonial": {
        "textAlign": "center"
    },
    "single-testimonial tes-thumbnail-area": {
        "position": "relative",
        "display": "table",
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 34,
        "marginLeft": "auto"
    },
    "single-testimonial tes-thumbnail-outer": {
        "width": 184,
        "height": 184,
        "borderRadius": "50%",
        "overflow": "hidden",
        "border": "2px solid #fff",
        "backgroundColor": "#fff"
    },
    "single-testimonial tes-thumb-img": {
        "width": "100%"
    },
    "single-testimonial thumb-icon-area": {
        "position": "absolute",
        "top": 20,
        "right": -6,
        "width": 50,
        "height": 50,
        "lineHeight": 50,
        "borderRadius": "50%",
        "fontSize": 20,
        "backgroundColor": "#fff"
    },
    "single-testimonial blockquote": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "border": "none",
        "lineHeight": 1.7
    },
    "single-testimonial blockquote blockquote-text": {
        "fontSize": 18,
        "fontStyle": "italic",
        "color": "#fff",
        "marginBottom": 18
    },
    "single-testimonial blockquote blockquote-text p": {},
    "single-testimonial blockquote cite": {
        "color": "#fff",
        "fontStyle": "normal",
        "fontSize": 16
    },
    "tes-thumb-ctrl-area": {
        "marginTop": 45
    },
    "tes-thumb-ctrl-lists": {
        "display": "table",
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto"
    },
    "tes-thumb-ctrl-lists li": {
        "width": 52,
        "height": 52,
        "border": "1px solid #fff",
        "borderRadius": "50%",
        "overflow": "hidden",
        "display": "inline-block",
        "marginRight": 15,
        "zIndex": 2,
        "position": "relative",
        "backgroundColor": "#fff"
    },
    "tes-thumb-ctrl-lists li a": {
        "position": "relative",
        "display": "block",
        "width": "100%",
        "height": "100%",
        "borderRadius": "50%",
        "overflow": "hidden"
    },
    "tes-thumb-ctrl-lists li a img": {
        "position": "relative",
        "width": "100%",
        "borderRadius": "50%"
    },
    "tes-thumb-ctrl-lists li a tes-thumb-overlay": {
        "position": "absolute",
        "opacity": 0,
        "filter": "alpha(opacity=0)",
        "top": 0,
        "left": 0,
        "width": "100%",
        "height": "100%",
        "borderRadius": "50%",
        "WebkitTransition": "opacity .5s ease",
        "transition": "opacity .5s ease"
    },
    "tes-thumb-ctrl-lists liactive a tes-thumb-overlay": {
        "opacity": 0.5,
        "filter": "alpha(opacity=50)"
    },
    "pricing-table": {
        "position": "relative",
        "backgroundColor": "#fff"
    },
    "pricing-tablesection-space": {
        "paddingBottom": 90
    },
    "pricing-table section-space": {
        "paddingBottom": 90
    },
    "single-pricing-table": {
        "backgroundColor": "#fff",
        "marginBottom": 30,
        "boxShadow": "3px 3px 18px rgba(0,0,0,.2)"
    },
    "pricing-table-style-one pricing-container > *": {
        "paddingTop": 0,
        "paddingRight": 40,
        "paddingBottom": 0,
        "paddingLeft": 40,
        "position": "relative"
    },
    "pricing-table-style-one pricing-container p-t-header": {
        "paddingTop": 60,
        "marginBottom": 30
    },
    "pricing-table-style-one th-btn-parent": {
        "color": "#fff"
    },
    "pricing-table-style-one pricing-container p-t-header pricing-title": {
        "fontSize": 36,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": -3,
        "fontWeight": "300"
    },
    "pricing-table-style-one best-tag": {
        "width": 60,
        "height": 47,
        "backgroundColor": "#fff",
        "textAlign": "center",
        "paddingTop": 15,
        "paddingRight": 5,
        "paddingBottom": 15,
        "paddingLeft": 5,
        "textTransform": "uppercase",
        "lineHeight": 16,
        "fontSize": 14,
        "position": "absolute",
        "top": -2,
        "right": 20,
        "boxShadow": "0px 0px 1px rgba(0, 0, 0, 0.2)"
    },
    "pricing-table-style-one pricing-container p-t-body": {
        "marginBottom": 40
    },
    "pricing-table-style-one pricing-container p-t-body ul": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "pricing-table-style-one pricing-container p-t-body ul li": {
        "listStyle": "none",
        "marginBottom": 22,
        "color": "#999"
    },
    "pricing-table-style-one pricing-container p-t-body ul linot-include": {
        "textDecoration": "line-through"
    },
    "pricing-table-style-one pricing-container p-t-footer": {
        "paddingBottom": 40
    },
    "pricing-table-style-one pricing-container p-t-footer price": {
        "float": "left",
        "fontSize": 36,
        "lineHeight": 1,
        "fontWeight": "300"
    },
    "pricing-table-style-one pricing-container p-t-footer price custom-pricing": {
        "fontSize": 1,
        "display": "inline-block",
        "fontWeight": "400",
        "marginRight": 3
    },
    "pricing-table-style-one pricing-container p-t-footer price currency": {
        "fontSize": 1,
        "display": "inline-block",
        "fontWeight": "400",
        "marginRight": 3
    },
    "pricing-table-style-one pricing-container p-t-footer price span": {
        "verticalAlign": "middle"
    },
    "pricing-table-style-onebest": {
        "color": "#fff"
    },
    "pricing-table-style-onebest th-btn": {
        "backgroundColor": "#fff !important",
        "color": "#f77c00 !important"
    },
    "pricing-table-style-onebest pricing-container p-t-body ul li": {
        "color": "#fff"
    },
    "pricing-table imaterial-icons": {
        "position": "relative",
        "top": 5,
        "paddingRight": 5
    },
    "pricing-table ifafa-rocket": {
        "paddingRight": 10
    },
    "pricing-container p-t-body ul li": {
        "fontSize": 1.3
    },
    "pricing-table-style-onebest pricing-container p-t-header price p": {
        "marginBottom": 0
    },
    "bg-brandsingle-pricing-tablepricing-table-style-onebestwowfadeInUpSmallanimated pricing-container": {
        "minHeight": 662
    },
    "cover-price": {
        "backgroundColor": "#f77c00",
        "position": "relative",
        "top": 150,
        "zIndex": 999999
    },
    "special-offer": {},
    "offer-content-wrapper": {
        "position": "relative",
        "minHeight": 610
    },
    "offer-left-area": {
        "float": "left",
        "width": "50%",
        "minHeight": 1
    },
    "offer-right-area": {
        "float": "left",
        "width": "50%",
        "minHeight": 1
    },
    "offer-image-area": {
        "textAlign": "center",
        "position": "absolute",
        "bottom": 0,
        "width": "inherit",
        "paddingTop": 0,
        "paddingRight": 20,
        "paddingBottom": 0,
        "paddingLeft": 20
    },
    "offer-content": {
        "marginTop": "16%",
        "marginBottom": 50,
        "position": "relative",
        "paddingLeft": 15
    },
    "offer-content offer-abs-bg": {
        "position": "absolute",
        "top": 0,
        "right": 0
    },
    "offer-content offer-abs-bg big-font": {
        "fontSize": 300,
        "opacity": 0.2,
        "filter": "alpha(opacity=10)",
        "marginTop": -30
    },
    "offer-content h2": {
        "fontSize": 30,
        "fontWeight": "400",
        "lineHeight": 1.13,
        "marginBottom": 47,
        "color": "#333"
    },
    "offer-content h2 span": {
        "display": "block",
        "marginLeft": 80,
        "fontSize": 39,
        "fontWeight": "500",
        "textTransform": "uppercase"
    },
    "offer-content h3": {
        "color": "#333",
        "marginBottom": 42,
        "fontSize": 24,
        "fontWeight": "400"
    },
    "offer-content h3 span": {},
    "offer-content p:last-of-type": {
        "marginBottom": 41
    },
    "offer-content a": {},
    "download": {},
    "download-bg": {
        "backgroundImage": "url('../../img/bg-04.jpg')"
    },
    "download-buttons": {
        "marginTop": 66,
        "textAlign": "center",
        "marginLeft": "auto",
        "marginRight": "auto"
    },
    "download-buttons a": {
        "display": "inline-block",
        "background": "#fff",
        "paddingTop": 19,
        "paddingRight": 33,
        "paddingBottom": 19,
        "paddingLeft": 33,
        "lineHeight": 1,
        "marginTop": 5,
        "marginRight": 5,
        "marginBottom": 5,
        "marginLeft": 5,
        "textAlign": "left",
        "color": "inherit",
        "height": "auto",
        "borderRadius": 0,
        "width": 195
    },
    "download-buttons a *": {
        "letterSpacing": 0
    },
    "download-buttons left-area": {
        "fontSize": 25,
        "float": "left"
    },
    "download-buttons right-area": {
        "float": "right"
    },
    "download-buttons right-area *": {},
    "download-buttons top-area": {
        "display": "block",
        "fontSize": 11,
        "marginBottom": 3,
        "color": "#666"
    },
    "download-buttons bottom-area": {
        "display": "block",
        "color": "#333",
        "fontSize": 16,
        "textAlign": "center"
    },
    "download-buttons a:hover *": {
        "color": "#fff"
    },
    "download-buttons a:active": {
        "boxShadow": "0px 2px 4px rgba(0, 0, 0, 0.5) inset"
    },
    "download-buttons btn-browser": {},
    "btn:hover": {
        "backgroundColor": "#fe9a3d",
        "color": "white !important"
    },
    "btn-large:hover": {
        "backgroundColor": "#fe9a3d",
        "color": "white !important"
    },
    "contact contact-location-toggle-btn:hover": {
        "backgroundColor": "#fe9a3d"
    },
    "team-member": {
        "backgroundColor": "#fff"
    },
    "team-membersection-space": {
        "paddingBottom": 28
    },
    "single-team-wrap": {
        "paddingTop": 0,
        "paddingRight": 20,
        "paddingBottom": 160,
        "paddingLeft": 20
    },
    "single-team": {
        "position": "relative"
    },
    "single-team team-member-img": {
        "position": "relative",
        "zIndex": 2
    },
    "single-team team-member-img img": {
        "width": "100%",
        "maxWidth": "100%",
        "WebkitFilter": "gray",
        "MozFilter": "grayscale(100%)",
        "OFilter": "grayscale(100%)",
        "MsFilter": "grayscale(100%)",
        "filter": "gray",
        "WebkitTransition": "all .4s ease",
        "transition": "all .4s ease"
    },
    "single-team team-member-info": {
        "position": "absolute",
        "width": "100%",
        "left": 0,
        "top": "100%",
        "paddingTop": 26
    },
    "single-team info-area-top": {
        "marginBottom": 20
    },
    "team-theme-01 single-team info-area-top": {
        "WebkitTransform": "translateY(-66px)",
        "MsTransform": "translateY(-66px)",
        "transform": "translateY(-66px)",
        "WebkitTransition": "all .4s ease",
        "transition": "all .4s ease"
    },
    "team-theme-01:hover single-team info-area-top": {
        "WebkitTransform": "translateY(0px)",
        "MsTransform": "translateY(0px)",
        "transform": "translateY(0px)"
    },
    "team-theme-01:hover single-team team-member-img img": {
        "WebkitFilter": "grayscale(0%)",
        "MozFilter": "grayscale(0%)",
        "OFilter": "grayscale(0%)",
        "MsFilter": "grayscale(0%)",
        "filter": "grayscale(0%)"
    },
    "team-theme-01 single-team info-area-bottom": {
        "WebkitTransform": "translateY(-66px)",
        "MsTransform": "translateY(-66px)",
        "transform": "translateY(-66px)",
        "WebkitTransition": "all .4s ease",
        "transition": "all .4s ease"
    },
    "team-theme-01:hover single-team info-area-bottom": {
        "WebkitTransform": "translateY(06px)",
        "MsTransform": "translateY(06px)",
        "transform": "translateY(06px)"
    },
    "single-team info-area-bottom t-m-name": {
        "fontSize": 18,
        "color": "#333",
        "marginBottom": 5,
        "textTransform": "uppercase",
        "fontWeight": "500"
    },
    "single-team info-area-bottom t-m-designation": {
        "fontSize": 14
    },
    "social": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": -5,
        "marginLeft": 0,
        "display": "table",
        "width": "100%"
    },
    "social li": {
        "listStyle": "none",
        "display": "inline-block",
        "marginTop": 5,
        "marginRight": 5,
        "marginBottom": 5,
        "marginLeft": 5
    },
    "social li a": {
        "display": "block",
        "width": 35,
        "height": 35,
        "borderRadius": "50%",
        "lineHeight": 35,
        "fontSize": 15,
        "textAlign": "center",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "team-theme-01 single-team:hover area-top img": {
        "WebkitFilter": "grayscale(0%)",
        "MozFilter": "grayscale(0%)",
        "OFilter": "grayscale(0%)",
        "MsFilter": "grayscale(0%)",
        "filter": "grayscale(0%)"
    },
    "blog-section": {
        "backgroundColor": "#f7f7f7",
        "paddingBottom": 120
    },
    "blog-section home-blog-posts": {
        "marginBottom": 25
    },
    "single-post": {
        "paddingTop": 4
    },
    "comment-link": {
        "color": "#333"
    },
    "blog-posts": {
        "overflow": "hidden"
    },
    "single-blog-posttheme01": {
        "background": "#fff",
        "paddingTop": 20,
        "paddingRight": 20,
        "paddingBottom": 20,
        "paddingLeft": 20
    },
    "single-blog-post": {
        "marginBottom": 30,
        "width": "100%"
    },
    "blog-post-thumb-container": {
        "position": "relative",
        "marginBottom": 15,
        "lineHeight": 1,
        "width": "100%",
        "overflow": "hidden"
    },
    "blog-post-thumb-container blog-post-thumb-permalink": {
        "display": "block",
        "position": "relative"
    },
    "blog-post-thumb-container blog-post-thumb-permalink:after": {
        "position": "absolute",
        "content": "\\f08e",
        "font": "normal normal normal 15px/33px FontAwesome",
        "textRendering": "auto",
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "border": "1px solid #fff",
        "color": "#fff",
        "left": "50%",
        "top": "50%",
        "width": 35,
        "height": 35,
        "textAlign": "center",
        "marginLeft": -17,
        "marginTop": -17,
        "WebkitTransition": "all .3s ease",
        "transition": "all .3s ease",
        "opacity": 0,
        "filter": "alpha(opacity=0)",
        "WebkitTransform": "scale(0)",
        "MsTransform": "scale(0)",
        "transform": "scale(0)"
    },
    "blog-post-thumb-container blog-post-thumbnail": {
        "maxWidth": "100%",
        "width": "100%",
        "WebkitFilter": "gray",
        "MozFilter": "grayscale(100%)",
        "OFilter": "grayscale(100%)",
        "MsFilter": "grayscale(100%)",
        "filter": "gray",
        "WebkitTransition": "all .4s ease",
        "transition": "all .4s ease"
    },
    "blog-post-thumb-container:hover blog-post-thumbnail": {
        "WebkitFilter": "grayscale(0%)",
        "MozFilter": "grayscale(0%)",
        "OFilter": "grayscale(0%)",
        "MsFilter": "grayscale(0%)",
        "filter": "grayscale(0%)"
    },
    "blog-post-thumb-container blog-post-thumb-permalink:hover:after": {
        "opacity": 1,
        "filter": "alpha(opacity=100)",
        "WebkitTransform": "scale(1)",
        "MsTransform": "scale(1)",
        "transform": "scale(1)"
    },
    "blog-post-thumb-container jwlogo": {
        "display": "none !important"
    },
    "single-blog-post blog-post-title-permalink": {
        "display": "table",
        "color": "#333"
    },
    "single-blog-post blog-post-title": {
        "fontSize": 20,
        "marginBottom": 4,
        "textTransform": "uppercase",
        "fontWeight": "900"
    },
    "single-blog-post blog-post-meta": {
        "fontSize": 13,
        "color": "#bbbbbb",
        "marginBottom": 13
    },
    "single-blog-post blog-post-meta a": {
        "fontSize": 13,
        "color": "#bbbbbb"
    },
    "single-blog-post blog-post-content": {
        "color": "#666",
        "marginBottom": 18,
        "maxHeight": 137,
        "overflow": "hidden"
    },
    "single-blog-post blog-post-content *:last-child": {
        "marginBottom": 0
    },
    "single-blog-post blog-post-bottom-meta": {},
    "single-blog-post blog-post-bottom-meta afavorite-link": {
        "color": "#a3a3a3"
    },
    "single-blog-post blog-post-bottom-metaread-more favorite-link": {
        "marginTop": 6
    },
    "blog-post-thumb-container > iframe": {
        "width": "100% !important",
        "border": "none",
        "height": "100% !important"
    },
    "thumb-slides-controller": {},
    "thumb-slides-controller a": {
        "fontSize": 16,
        "width": 25,
        "height": 25,
        "lineHeight": 25,
        "textAlign": "center",
        "display": "block",
        "position": "absolute",
        "top": 5,
        "left": 5,
        "color": "#fff",
        "WebkitTransition": "all .5s ease",
        "transition": "all .5s ease"
    },
    "thumb-slides-controller aright-arrow": {
        "left": 35
    },
    "thumb-slides-controller a:hover": {
        "backgroundColor": "#444"
    },
    "news-letter": {},
    "news-letter-bg": {
        "backgroundImage": "url('../../img/austin-sketch.jpg')"
    },
    "news-letter section-space": {
        "paddingBottom": 111
    },
    "newsletter-form-area form": {
        "display": "inline-block",
        "position": "relative",
        "width": 530,
        "maxWidth": "100%"
    },
    "newsletter-form-area mail-icon": {
        "width": 25,
        "position": "absolute",
        "left": 0,
        "top": 0,
        "height": "100%",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "lineHeight": 39,
        "color": "#ADADAD",
        "fontSize": 17,
        "textAlign": "left"
    },
    "newsletter-form-area form input[type=\"email\"]": {
        "border": "none",
        "maxWidth": "100%",
        "color": "#ddd",
        "borderBottom": "1px solid #fff",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingRight": 30,
        "paddingLeft": 30,
        "textAlign": "center",
        "display": "block",
        "boxSizing": "border-box",
        "fontWeight": "300",
        "fontSize": 14
    },
    "newsletter-form-area form input[type=\"submit\"]": {
        "outline": "none",
        "textIndent": -99999,
        "background": "url('../../img/go-btn.png') transparent no-repeat",
        "width": 25,
        "backgroundPosition": "center right",
        "border": "none",
        "position": "absolute",
        "right": 0,
        "top": 0,
        "height": "100%",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "newsletter-form-area input::-webkit-input-placeholder": {
        "lineHeight": 1.9,
        "color": "#bbb"
    },
    "newsletter-form-area input:-moz-placeholder": {
        "lineHeight": 1.9,
        "color": "#bbb"
    },
    "newsletter-form-area input::-moz-placeholder": {
        "lineHeight": 1.9,
        "color": "#bbb"
    },
    "newsletter-form-area input:-ms-input-placeholder": {
        "lineHeight": 1.9,
        "color": "#bbb"
    },
    "mailchimp-form-message": {
        "display": "table",
        "marginTop": 30,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "color": "#333",
        "fontSize": 13,
        "paddingTop": 7,
        "paddingRight": 15,
        "paddingBottom": 7,
        "paddingLeft": 15,
        "fontWeight": "400",
        "backgroundColor": "#fff"
    },
    "mailchimp-form-messageerror": {
        "color": "#FF5F5F"
    },
    "mailchimp-form-message *": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "tweet-section": {
        "backgroundColor": "#f7f7f7"
    },
    "tweet-sectionsection-space": {
        "paddingBottom": 108
    },
    "twitter-header": {
        "marginTop": 5
    },
    "twitter-header twitter-icon": {
        "fontSize": 50,
        "marginBottom": 18,
        "display": "inline-block"
    },
    "twitter-header twitter-title": {
        "fontSize": 30
    },
    "allTweets": {},
    "allTweets single-tweet": {},
    "allTweets single-tweet tweet-date": {
        "fontSize": 15,
        "color": "#999",
        "marginBottom": 18,
        "lineHeight": 1
    },
    "allTweets single-tweet tweet-text": {
        "marginBottom": 25,
        "fontSize": 15
    },
    "allTweets single-tweet tweet-text a:hover": {},
    "allTweets single-tweet tweet-controlls": {
        "marginBottom": 22
    },
    "allTweets single-tweet tweet-controlls a": {
        "color": "#999",
        "marginLeft": 15,
        "marginRight": 15
    },
    "allTweets single-tweet tweet-controlls a i": {
        "display": "inline-block",
        "marginRight": 5,
        "fontSize": 14,
        "verticalAlign": "middle"
    },
    "allTweets single-tweet tweet-controlls arelpy-btn i": {
        "fontSize": 22
    },
    "allTweets single-tweet tweet-controlls aretweet-btn i": {
        "fontSize": 16
    },
    "allTweets single-tweet tweet-controlls afavorite-btn i": {
        "fontSize": 16
    },
    "slider-arrowtweets-arrow": {
        "marginTop": 20
    },
    "map-section": {
        "position": "relative"
    },
    "map-header-area": {
        "textAlign": "center",
        "color": "#fff",
        "paddingTop": 36,
        "paddingRight": 0,
        "paddingBottom": 36,
        "paddingLeft": 0,
        "width": "100%",
        "zIndex": 1
    },
    "map-header-area h2": {
        "fontSize": 24,
        "textTransform": "uppercase",
        "fontWeight": "900"
    },
    "map-header-area h2 location-icon": {
        "display": "inline-block",
        "background": "#fff",
        "color": "#666",
        "width": 50,
        "height": 50,
        "borderRadius": "50%",
        "lineHeight": 50,
        "marginRight": 18
    },
    "map": {
        "width": "100%",
        "height": 450
    },
    "map map": {
        "display": "block",
        "width": "100%",
        "height": "100%"
    },
    "map img": {
        "maxWidth": "inherit"
    },
    "contact": {
        "position": "relative",
        "bottom": 0,
        "width": "100%",
        "backgroundColor": "#fff",
        "borderTop": "1px solid rgba(0,0,0,.1)"
    },
    "contact contact-location-toggle-btn": {
        "display": "block",
        "width": 66,
        "height": 66,
        "lineHeight": 66,
        "textAlign": "center",
        "borderRadius": "50%",
        "color": "#fff",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "position": "absolute",
        "top": 0,
        "left": "50%",
        "marginLeft": -33,
        "marginTop": -33,
        "zIndex": 333
    },
    "contact contact-location-toggle-btn i": {
        "fontSize": 30
    },
    "contact contact-content-wrapper": {
        "paddingTop": 110,
        "display": "none",
        "paddingBottom": 120
    },
    "contact-title": {
        "fontSize": 20,
        "color": "#777",
        "marginBottom": 35
    },
    "contact-info contact-info-lists li": {
        "listStyle": "none",
        "marginBottom": 20
    },
    "contact-info contact-info-lists li a": {
        "fontSize": 14,
        "color": "#777",
        "display": "inline-block",
        "position": "relative",
        "paddingLeft": 47,
        "minHeight": 35,
        "paddingTop": 4
    },
    "contact-info contact-info-lists li a span": {
        "display": "inline-block",
        "width": 35,
        "height": 35,
        "lineHeight": 36,
        "background": "#fff",
        "borderRadius": "50%",
        "textAlign": "center",
        "fontSize": 12,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "position": "absolute",
        "top": 0,
        "left": 0
    },
    "contact-info contact-info-lists li a span i": {
        "fontSize": 17
    },
    "contact-info contact-info-lists li a:hover span i": {
        "color": "#fff !important"
    },
    "cu-form input": {
        "marginBottom": 23,
        "borderBottomColor": "#ececec",
        "height": 30
    },
    "cu-form textarea": {
        "marginBottom": 23,
        "borderBottomColor": "#ececec",
        "height": 30
    },
    "cu-form input:focus": {
        "color": "#444",
        "fontSize": 14
    },
    "cu-form textarea:focus": {
        "color": "#444",
        "fontSize": 14
    },
    "cu-form input[type=\"submit\"]": {
        "width": "auto",
        "fontSize": 14,
        "color": "#fff",
        "border": "none",
        "paddingTop": 15,
        "paddingRight": 30,
        "paddingBottom": 15,
        "paddingLeft": 30,
        "height": "auto",
        "marginBottom": 30,
        "marginTop": 20
    },
    "cu-form input-field label": {
        "color": "#bbb",
        "left": 0,
        "top": 0
    },
    "cu-form input-field labelactive": {
        "fontSize": 13,
        "color": "#727272",
        "WebkitTransform": "translateY(-94%)",
        "MsTransform": "translateY(-94%)",
        "transform": "translateY(-94%)"
    },
    "cu-form form-message": {
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "fontSize": 13,
        "background": "#fff"
    },
    "cu-form form-message *": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "cu-form form-messageerror": {
        "color": "#FF5F5F"
    },
    "main-footer": {
        "position": "relative",
        "zIndex": 111,
        "textAlign": "center"
    },
    "main-footer top": {
        "backgroundColor": "#1e1e1e",
        "color": "#fff",
        "paddingTop": 85,
        "paddingRight": 0,
        "paddingBottom": 50,
        "paddingLeft": 0
    },
    "main-footer footer-logo": {
        "marginBottom": 50,
        "maxWidth": 450,
        "marginLeft": "auto",
        "marginRight": "auto"
    },
    "main-footer footer-logo img": {
        "width": "100%"
    },
    "main-footer bottom": {
        "backgroundColor": "#171717",
        "color": "#666",
        "fontSize": 13,
        "paddingTop": 13,
        "paddingRight": 0,
        "paddingBottom": 13,
        "paddingLeft": 0,
        "borderTop": "1px solid #222222"
    },
    "main-footer bottom p": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "main-footer footer-social li": {},
    "main-footer footer-social li a": {
        "fontSize": 17,
        "border": "none",
        "width": 50,
        "height": 50,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "lineHeight": 50,
        "backgroundColor": "#fff"
    },
    "main-footer footer-social li a:hover": {
        "color": "#fff"
    },
    "clearfix": {
        "Zoom": 1
    },
    "nobgimage": {
        "backgroundImage": "inherit !important"
    },
    "opaciry30": {
        "opacity": ".3 !important",
        "filter": "alpha(opacity=30)"
    }
});