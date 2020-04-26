(this["webpackJsonpmovies-series-app"]=this["webpackJsonpmovies-series-app"]||[]).push([[0],{23:function(e,t){e.exports={APIKey:"f680a664"}},27:function(e,t,a){},41:function(e,t,a){e.exports=a(70)},46:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(18),c=a.n(r),i=(a(46),function(){return l.a.createElement("nav",null,l.a.createElement("div",{className:"nav-wrapper red darken-4"},l.a.createElement("a",{href:"/",className:"brand-logo center"},"MovieInfo")))}),o=(a(27),a(2)),m=a(3),s=a(5),d=a(4),p=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("footer",{className:"page-footer grey darken-3"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("h5",{className:"white-text"},"MovieInfo"),l.a.createElement("p",{className:"grey-text text-lighten-4"},"developed by Bimsara Deraniyagala | using Reactjs, Reduxjs and integrated with external movies data API ",l.a.createElement("a",{href:"http://www.omdbapi.com/",rel:"noopener noreferrer",target:"_blank"},"OMDB")))),l.a.createElement("div",{className:"footer-copyright grey darken-4"},l.a.createElement("div",{className:"container"},"\xa9 2020 All rights reserved.",l.a.createElement("a",{className:"grey-text text-lighten-6 right",href:"/"},"contact us"))))}}]),a}(n.Component),u=a(10),h=a(22),C=a.n(h),E=a(23),f=function(){return{type:"LOADING"}},v=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).handleChange=function(t){e.props.searchMovie(t.target.value)},e.handleSubmit=function(t){t.preventDefault(),e.props.fetchmovies(e.props.text),e.props.setLoading()},e}return Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("form",{className:"container flow-text",onSubmit:this.handleSubmit,style:{marginTop:"30px"}},l.a.createElement("div",{className:"input-field row"},l.a.createElement("label",{htmlFor:"search"},"search here"),l.a.createElement("input",{type:"text",className:"white-text center col s7 m8 l9",onChange:this.handleChange}),l.a.createElement("button",{className:"red accent-4 waves-effect waves-light btn-large col s4 m3 l2 offset-s1 offset-l1 offset-m1",onSubmit:this.handleSubmit},"SEARCH")))}}]),a}(n.Component),g=Object(u.b)((function(e){return{text:e.movies.text}}),{searchMovie:function(e){return function(t){t({type:"SEARCH_MOVIE",payload:e})}},fetchmovies:function(e){return function(t){C.a.get("https://www.omdbapi.com/?apikey=".concat(E.APIKey,"&s=").concat(e)).then((function(e){return t({type:"FETCH_MOVIES",payload:e.data})})).catch((function(e){return console.log(e)}))}},setLoading:f})(v),b=function(){return l.a.createElement("div",{className:"preloader-wrapper small active",style:{margin:"auto",display:"block",marginTop:"20px",marginBottom:"20px"}},l.a.createElement("div",{className:"spinner-layer spinner-red-only"},l.a.createElement("div",{className:"circle-clipper left"},l.a.createElement("div",{className:"circle"})),l.a.createElement("div",{className:"gap-patch"},l.a.createElement("div",{className:"circle"})),l.a.createElement("div",{className:"circle-clipper right"},l.a.createElement("div",{className:"circle"}))))},y=a(15),L=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e=this.props.movie;return l.a.createElement("div",{className:"col s12 m6 l4 xl3",style:{height:"300px",width:"300px",marginBottom:"350px",position:"inherit",backgroundColor:"black"}},l.a.createElement("div",{className:"card black",id:"card"},l.a.createElement("div",{className:"card-image",style:{width:"fit-content",height:"fit-content",margin:"auto"}},l.a.createElement("img",{src:e.Poster,alt:"movie cover"})),l.a.createElement("div",{className:"card-content white-text grey darken-4"},l.a.createElement("span",null,e.Title," - ",e.Year)),l.a.createElement("div",{className:"card-action red accent-4 white-text",style:{height:"75px",textAlign:"start",width:"100%"}},l.a.createElement(y.b,{to:"/movie/"+e.imdbID},"more details"))))}}]),a}(n.Component),w=(a(69),function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("svg",{className:"svg",viewBox:"0 0 1005 712",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{margin:"auto",display:"block",maxWidth:"600px",marginTop:"10px",marginBottom:"20px"}},l.a.createElement("g",{id:"netflix"},l.a.createElement("g",{clipPath:"url(#clip0)"},l.a.createElement("g",{id:"others"},l.a.createElement("path",{id:"Vector",d:"M980.819 564.648H713.674V566.522H980.819V564.648Z",fill:"#474747"}),l.a.createElement("path",{id:"Vector_2",d:"M1004.25 601.205H784.913V603.079H1004.25V601.205Z",fill:"#474747"}),l.a.createElement("path",{id:"Vector_3",d:"M840.209 231.233H838.334V566.477H840.209V231.233Z",fill:"#474747"}),l.a.createElement("path",{id:"Vector_4",d:"M839.633 537.747C859.823 537.747 876.19 500.397 876.19 454.323C876.19 408.249 859.823 370.899 839.633 370.899C819.443 370.899 803.076 408.249 803.076 454.323C803.076 500.397 819.443 537.747 839.633 537.747Z",fill:"#474747"}),l.a.createElement("path",{id:"Vector_5",d:"M839.633 347.465C859.823 347.465 876.19 310.114 876.19 264.04C876.19 217.966 859.823 180.616 839.633 180.616C819.443 180.616 803.076 217.966 803.076 264.04C803.076 310.114 819.443 347.465 839.633 347.465Z",fill:"#474747"}),l.a.createElement("path",{id:"Vector_6",d:"M840.531 195.883L838.735 195.345C838.848 194.966 849.87 157.197 831.773 132.884C821.552 119.152 804.012 112.189 779.642 112.189V110.315C804.641 110.315 822.688 117.534 833.282 131.772C851.939 156.847 840.647 195.496 840.531 195.883Z",fill:"#474747"}),l.a.createElement("path",{id:"Vector_7",d:"M779.642 134.686C792.584 134.686 803.076 124.194 803.076 111.252C803.076 98.3099 792.584 87.8182 779.642 87.8182C766.7 87.8182 756.208 98.3099 756.208 111.252C756.208 124.194 766.7 134.686 779.642 134.686Z",fill:"#FF0000"}),l.a.createElement("path",{id:"Vector_8",d:"M170.9 493.522C170.93 556.553 133.47 578.577 87.251 578.599C86.1774 578.6 85.1089 578.588 84.0457 578.565C81.9036 578.52 79.7839 578.423 77.6864 578.275C35.9709 575.342 3.54786 552.222 3.51942 493.604C3.48996 432.941 80.9843 356.348 86.7961 350.684C86.8012 350.684 86.8012 350.684 86.8063 350.679C87.0271 350.463 87.1401 350.355 87.1401 350.355C87.1401 350.355 170.869 430.497 170.9 493.522Z",fill:"#FF0000"}),l.a.createElement("path",{id:"Vector_9",d:"M84.2002 568.959L114.788 526.177L84.1255 573.654L84.0457 578.565C81.9036 578.52 79.7839 578.423 77.6864 578.275L80.9535 515.217L80.9276 514.729L80.984 514.636L81.2945 508.678L50.5084 461.113L81.3848 504.214L81.4624 505.478L83.9305 457.835L57.5714 408.68L84.25 449.462L86.7961 350.684L86.8061 350.356L86.8063 350.679L86.4127 428.576L112.61 397.682L86.3029 435.284L85.6302 477.944L110.096 436.993L85.5357 484.215L85.162 507.936L120.669 450.934L85.0273 516.211L84.2002 568.959Z",fill:"#474747"}),l.a.createElement("path",{id:"Vector_10",d:"M162.019 577.648H3.60657V579.522H162.019V577.648Z",fill:"#474747"}),l.a.createElement("path",{id:"Vector_11",d:"M624.758 15.935H193.576V17.8097H624.758V15.935Z",fill:"#474747"}),l.a.createElement("path",{id:"Vector_12",d:"M14.3464 363.228C12.1217 363.228 9.94697 362.568 8.09721 361.332C6.24745 360.096 4.80574 358.34 3.95439 356.284C3.10304 354.229 2.8803 351.967 3.31432 349.785C3.74833 347.603 4.81963 345.599 6.39272 344.026C7.96582 342.453 9.97006 341.382 12.152 340.948C14.3339 340.514 16.5956 340.736 18.6509 341.588C20.7063 342.439 22.463 343.881 23.699 345.731C24.9349 347.58 25.5946 349.755 25.5946 351.98C25.5913 354.962 24.4052 357.821 22.2964 359.93C20.1877 362.038 17.3286 363.225 14.3464 363.228V363.228ZM14.3464 342.606C12.4925 342.606 10.6802 343.156 9.13874 344.186C7.59727 345.216 6.39585 346.68 5.68639 348.393C4.97693 350.105 4.7913 351.99 5.15298 353.808C5.51466 355.627 6.4074 357.297 7.71831 358.608C9.02922 359.919 10.6994 360.811 12.5177 361.173C14.336 361.535 16.2207 361.349 17.9335 360.64C19.6463 359.93 21.1102 358.729 22.1402 357.187C23.1702 355.646 23.7199 353.834 23.7199 351.98C23.7171 349.495 22.7286 347.112 20.9713 345.355C19.2141 343.598 16.8315 342.609 14.3464 342.606V342.606Z",fill:"#FF0000"}),l.a.createElement("path",{id:"Vector_13",d:"M219 186C215.044 186 211.178 184.827 207.889 182.629C204.6 180.432 202.036 177.308 200.522 173.654C199.009 169.999 198.613 165.978 199.384 162.098C200.156 158.219 202.061 154.655 204.858 151.858C207.655 149.061 211.219 147.156 215.098 146.384C218.978 145.613 222.999 146.009 226.654 147.522C230.308 149.036 233.432 151.6 235.629 154.889C237.827 158.178 239 162.044 239 166C238.994 171.303 236.885 176.386 233.136 180.136C229.386 183.885 224.302 185.994 219 186V186ZM219 149.333C215.704 149.333 212.481 150.311 209.74 152.142C207 153.974 204.863 156.577 203.602 159.622C202.341 162.667 202.01 166.018 202.654 169.251C203.297 172.485 204.884 175.454 207.215 177.785C209.546 180.116 212.515 181.703 215.748 182.346C218.981 182.99 222.333 182.659 225.378 181.398C228.423 180.137 231.026 178 232.858 175.259C234.689 172.519 235.667 169.296 235.667 166C235.662 161.581 233.904 157.345 230.779 154.22C227.655 151.096 223.419 149.338 219 149.333V149.333Z",fill:"#FF0000"}),l.a.createElement("path",{id:"Vector_14",d:"M417.5 654.996C648.079 654.996 835 650.655 835 645.299C835 639.943 648.079 635.602 417.5 635.602C186.921 635.602 0 639.943 0 645.299C0 650.655 186.921 654.996 417.5 654.996Z",fill:"#474747"}),l.a.createElement("path",{id:"Vector_15",d:"M417.5 684.088C577.132 684.088 706.538 681.083 706.538 677.375C706.538 673.667 577.132 670.661 417.5 670.661C257.868 670.661 128.462 673.667 128.462 677.375C128.462 681.083 257.868 684.088 417.5 684.088Z",fill:"#474747"}),l.a.createElement("path",{id:"Vector_16",d:"M417.632 711.943C547.851 711.943 653.414 709.491 653.414 706.467C653.414 703.442 547.851 700.99 417.632 700.99C287.414 700.99 181.851 703.442 181.851 706.467C181.851 709.491 287.414 711.943 417.632 711.943Z",fill:"#474747"}),l.a.createElement("path",{id:"Vector_17",d:"M623.014 468.395L621.641 497.217L687.52 519.177C687.52 519.177 684.089 482.806 686.148 479.375L623.014 468.395Z",fill:"#F8EAEA"}),l.a.createElement("path",{id:"Vector_18",d:"M515.96 596.722L509.784 620.74H538.606V596.722H515.96Z",fill:"#FFB8B8"}),l.a.createElement("path",{id:"Vector_19",d:"M665.561 603.107L678.599 607.702L685.461 590.471L673.795 581.281L665.561 603.107Z",fill:"#A0616A"}),l.a.createElement("path",{id:"Vector_20",d:"M688.665 573.199C688.665 573.199 708.107 570.645 708.107 587.114C708.107 603.584 710.852 644.072 683.403 639.269C683.403 639.269 671.05 640.641 675.854 626.23C675.854 626.23 680.744 620.368 678.985 616.78C677.227 613.191 666.933 610.447 668.305 608.388C669.678 606.329 684.775 589.859 684.775 589.859L688.665 573.199Z",fill:"#3C3C3C"}),l.a.createElement("path",{id:"Vector_21",d:"M688.893 515.745L621.641 492.413L617.524 508.883C617.524 508.883 516.646 450.552 510.47 490.354C510.47 490.354 504.98 522.608 513.215 565.155L513.901 599.467C513.901 599.467 531.057 603.584 539.292 600.153L539.979 563.096C539.979 563.096 546.841 539.078 543.41 520.549C543.41 520.549 594.878 561.037 618.21 565.841C618.21 565.841 536.547 628.975 546.155 648.876C555.762 668.777 567.428 672.208 582.525 668.777C592.929 666.412 639.508 628.851 667.462 605.727C677.043 597.876 684.651 587.89 689.676 576.569C694.701 565.247 697.002 552.906 696.395 540.534C695.895 531.431 693.794 522.608 688.893 515.745Z",fill:"#474747"}),l.a.createElement("path",{id:"Vector_22",d:"M514.588 611.819C514.588 611.819 513.901 603.584 509.784 607.015C505.666 610.447 491.255 623.485 491.255 623.485C491.255 623.485 439.101 629.21 470.668 642.249C485.085 644.417 499.821 642.515 513.215 636.759C513.215 636.759 548.29 645.763 547.565 637.026C546.841 628.289 538.606 613.697 538.606 613.697C538.606 613.697 528.999 620.74 518.019 611.133L514.588 611.819Z",fill:"#2F2E41"}),l.a.createElement("path",{id:"Vector_23",d:"M650.463 389.477C664.486 389.477 675.854 378.109 675.854 364.086C675.854 350.063 664.486 338.695 650.463 338.695C636.44 338.695 625.072 350.063 625.072 364.086C625.072 378.109 636.44 389.477 650.463 389.477Z",fill:"#F9F3EB"}),l.a.createElement("path",{id:"Vector_24",d:"M671.05 365.459C671.05 365.459 675.168 386.046 682.716 390.85L640.856 440.259L625.072 425.162L636.738 404.574C636.738 404.574 649.777 397.026 645.659 386.732L671.05 365.459Z",fill:"#F9F3EB"}),l.a.createElement("path",{id:"Vector_25",d:"M686.148 392.908C686.148 392.908 716.342 399.084 719.773 418.985C723.205 438.886 716.342 475.257 716.342 475.257L701.931 582.311C701.931 582.311 701.245 627.603 683.403 620.054C665.56 612.505 688.206 578.193 688.206 578.193L694.383 510.942C694.383 510.942 697.128 453.984 691.638 447.121L669.678 440.259C669.678 440.259 674.482 394.967 686.148 392.908Z",fill:"#F9F3EB"}),l.a.createElement("path",{id:"Vector_26",d:"M636.738 404.574C636.738 404.574 616.151 403.888 603.113 420.358C590.074 436.828 558.507 449.18 558.507 449.18L479.589 480.061C479.589 480.061 465.178 454.67 456.257 463.591C447.336 472.512 472.727 495.158 484.393 492.413C496.059 489.668 566.742 468.395 566.742 468.395L623.014 443.004L636.738 404.574Z",fill:"#F9F3EB"}),l.a.createElement("path",{id:"Vector_27",d:"M681.653 389.214C681.653 389.214 655.267 424.475 643.601 423.789C631.935 423.103 639.792 402.253 639.792 402.253L631.557 404.312C631.557 404.312 620.269 425.848 618.896 427.22C618.896 427.22 602.426 453.984 620.955 460.16L621.641 474.571C621.641 474.571 667.619 472.512 687.52 482.806L691.638 447.121C691.638 447.121 665.561 434.083 679.972 408.692C679.972 408.692 685.084 395.391 690.574 394.018L681.653 389.214Z",fill:"#FF0000"}),l.a.createElement("path",{id:"Vector_28",opacity:"0.1",d:"M688.549 577.85L583.555 654.709C583.555 654.709 689.236 592.261 688.549 577.85Z",fill:"black"}),l.a.createElement("path",{id:"Vector_29",d:"M676.883 366.488C677.978 366.488 678.866 364.491 678.866 362.027C678.866 359.564 677.978 357.567 676.883 357.567C675.789 357.567 674.901 359.564 674.901 362.027C674.901 364.491 675.789 366.488 676.883 366.488Z",fill:"#FFB8B8"}),l.a.createElement("path",{id:"Vector_30",d:"M622.468 350.602C622.468 350.602 615.352 302.536 666.173 317.367C666.173 317.367 702.126 310.054 714.824 354.958L727.714 402.036L721.814 398.97L719.206 404.972L709.79 407.55L705.587 399.592L703.816 409.388L626.468 418.602C626.468 418.602 660.783 397.409 660.627 360.61L654.15 367.723L622.468 350.602Z",fill:"#474747"}),l.a.createElement("path",{id:"path4155",d:"M448.349 153.152L448.153 262.709L447.958 372.267L438.958 346.834V346.769L427.285 590.664C438.763 623.01 444.893 640.291 444.958 640.356C445.023 640.422 451.544 640.813 459.435 641.204C483.303 642.378 512.91 644.921 535.408 647.725C540.625 648.378 545.059 648.704 545.385 648.443C545.712 648.182 545.777 536.668 545.712 400.569L545.516 153.152H448.349V153.152Z",fill:"#B1060F"}),l.a.createElement("path",{id:"path4157",d:"M272.601 152.826V400.504C272.601 536.733 272.731 648.312 272.927 648.508C273.122 648.704 281.535 647.856 291.708 646.747C301.881 645.639 315.902 644.204 322.88 643.617C333.574 642.704 365.659 640.682 369.311 640.617C370.42 640.617 370.485 635.074 370.615 535.69L370.811 430.763L378.571 452.674C379.745 456.065 380.136 457.109 381.31 460.434L392.983 216.604C390.505 209.626 391.809 213.278 389.005 205.322C379.484 178.389 371.398 155.63 371.072 154.587L370.42 152.761H272.601L272.601 152.826Z",fill:"#B1060F"}),l.a.createElement("path",{id:"path5721",d:"M272.601 152.826L370.746 430.958V430.828L378.506 452.739C421.612 574.752 444.762 640.226 444.893 640.356C444.958 640.422 451.479 640.813 459.37 641.204C483.238 642.378 512.844 644.921 535.343 647.725C540.494 648.377 544.994 648.704 545.255 648.443L447.958 372.202V372.267L438.958 346.834C430.155 321.988 424.285 305.358 388.875 205.322C379.354 178.389 371.267 155.63 370.941 154.587L370.289 152.761H321.445L272.601 152.826V152.826Z",fill:"#E50914"})),l.a.createElement("path",{id:"square_02",d:"M199 307H174V282H199V307ZM175.923 305.077H197.077V283.923H175.923V305.077Z",fill:"#FF0000"}),l.a.createElement("path",{id:"square_01",d:"M103 236H48V181H103V236ZM52.2307 231.769H98.7692V185.231H52.2307V231.769Z",fill:"#FF0000"}),l.a.createElement("path",{id:"square_03",d:"M756.337 540.381H731.966V516.01H756.337V540.381ZM733.841 538.506H754.462V517.884H733.841V538.506Z",fill:"#FF0000"}),l.a.createElement("path",{id:"circle",d:"M210.81 35.6194C220.646 35.6194 228.619 27.6457 228.619 17.8097C228.619 7.97367 220.646 0 210.81 0C200.974 0 193 7.97367 193 17.8097C193 27.6457 200.974 35.6194 210.81 35.6194Z",fill:"#FF0000"}))),l.a.createElement("defs",null,l.a.createElement("clipPath",{id:"clip0"},l.a.createElement("rect",{width:"1004.25",height:"711.943",fill:"white"}))))}}]),a}(n.Component)),x=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e,t=this.props.movies;return e="True"===t.Response?t.Search.map((function(e,t){return l.a.createElement(L,{key:t,movie:e})})):l.a.createElement(w,null),l.a.createElement("div",{className:"row",style:{margin:"auto",display:"block"}},l.a.createElement("div",{className:"col s10 m10 l10 xl10 offset-s1 offset-m1 offset-l1 offset-xl1"},e))}}]),a}(n.Component),N=Object(u.b)((function(e){return{movies:e.movies.movies}}))(x),V=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"card grey darken-4 grey-text",style:{padding:"10px",margin:"auto",marginTop:"40px",marginBottom:"40px",display:"block"}},l.a.createElement("p",null,"Get all the information you need about your favourite movies and TV shows, just by doing a simple search")))}}]),a}(n.Component),M=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e=this.props.loading;return l.a.createElement("div",{className:"searchBar center"},l.a.createElement(g,null),l.a.createElement(V,null),e?l.a.createElement(b,null):l.a.createElement(N,null))}}]),a}(n.Component),O=Object(u.b)((function(e){return{loading:e.movies.loading}}))(M),k=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col s12 m12 l12"},l.a.createElement("div",{className:"card grey darken-4"},l.a.createElement("div",{className:"card-content white-text",style:{marginLeft:"7%",marginRight:"7%",margin:"center",display:"block"}},l.a.createElement("span",{className:"card-title"},"NETFLIX"),l.a.createElement("p",{className:"grey-text"},"Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices."),l.a.createElement("p",{className:"grey-text"},"You can watch as much as you want, whenever you want without a single commercial \u2013 all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!")),l.a.createElement("div",{className:"card-action red accent-4 white-text center"},l.a.createElement("a",{href:"https://www.netflix.com/",target:"_blank",rel:"noopener noreferrer",style:{marginLeft:"7%",marginRight:"7%"}},"TRY IT NOW"))))))}}]),a}(n.Component),j=a(12),Z=a(39),F=a(40),_=a(17),H={text:"",movies:[],loading:!1,movie:[]},A=Object(j.combineReducers)({movies:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEARCH_MOVIE":return Object(_.a)({},e,{text:t.payload,loading:!1});case"FETCH_MOVIES":return Object(_.a)({},e,{movies:t.payload,loading:!1});case"FETCH_MOVIE":return Object(_.a)({},e,{movie:t.payload,loading:!1});case"LOADING":return Object(_.a)({},e,{loading:!0});default:return e}}}),B=[Z.a],T=Object(j.createStore)(A,{},Object(F.composeWithDevTools)(j.applyMiddleware.apply(void 0,B))),I=a(13),R=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"componentDidMount",value:function(){this.props.fetchMovie(this.props.match.params.id),this.props.setLoading()}},{key:"render",value:function(){var e=this.props,t=e.loading,a=e.movie,n=l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"container col m3 l3 xl3 s10 offset-s1"},l.a.createElement("img",{src:a.Poster,alt:"movie cover",style:{width:"100%",height:"auto",marginTop:"40px"}})),l.a.createElement("div",{className:"col s10 m7 l7 xl7 offset-s1",style:{marginTop:"35px",marginBottom:"35px"}},l.a.createElement("ul",{className:"collection with-header white-text "},l.a.createElement("li",{className:"collection-header black"},l.a.createElement("h4",null,this.props.movie.Title," - ",this.props.movie.Year)),l.a.createElement("li",{className:"collection-item black"},l.a.createElement("b",null,"Released Date : "),l.a.createElement("font",{className:"grey-text text-lighten-1"},a.Released)),l.a.createElement("li",{className:"collection-item black"},l.a.createElement("b",null,"Runtime : "),l.a.createElement("font",{className:"grey-text text-lighten-1"},a.Runtime)),l.a.createElement("li",{className:"collection-item black"},l.a.createElement("b",null,"Genre : "),l.a.createElement("font",{className:"grey-text text-lighten-1"},a.Genre)),l.a.createElement("li",{className:"collection-item black"},l.a.createElement("b",null,"Director : "),l.a.createElement("font",{className:"grey-text text-lighten-1"},a.Director)),l.a.createElement("li",{className:"collection-item black"},l.a.createElement("b",null,"Writer : "),l.a.createElement("font",{className:"grey-text text-lighten-1"},a.Writer)),l.a.createElement("li",{className:"collection-item black"},l.a.createElement("b",null,"Actors : "),l.a.createElement("font",{className:"grey-text text-lighten-1"},a.Actors)),l.a.createElement("li",{className:"collection-item black"},l.a.createElement("b",null,"Plot : "),l.a.createElement("font",{className:"grey-text text-lighten-1"},a.Plot)),l.a.createElement("li",{className:"collection-item black"},l.a.createElement("b",null,"Language : "),l.a.createElement("font",{className:"grey-text text-lighten-1"},a.Language)),l.a.createElement("li",{className:"collection-item black"},l.a.createElement("b",null,"Country : "),l.a.createElement("font",{className:"grey-text text-lighten-1"},a.Country)),l.a.createElement("li",{className:"collection-item black"},l.a.createElement("b",null,"Awards : "),l.a.createElement("font",{className:"grey-text text-lighten-1"},a.Awards))),l.a.createElement("a",{className:"red accent-4 waves-effect waves-light btn-large",href:"https://www.imdb.com/title/"+a.imdbID,target:"_blank",rel:"noopener noreferrer",style:{align:"auto",display:"block"}},"view on imdb"),l.a.createElement(y.b,{className:"grey darken-4 waves-effect waves-light btn-large",to:"/",style:{align:"auto",display:"block"}},"back to home")))),r=t?l.a.createElement(b,null):n;return l.a.createElement("div",null,r)}}]),a}(n.Component),S=Object(u.b)((function(e){return{loading:e.movies.loading,movie:e.movies.movie}}),{fetchMovie:function(e){return function(t){C.a.get("https://www.omdbapi.com/?apikey=".concat(E.APIKey,"&i=").concat(e)).then((function(e){return t({type:"FETCH_MOVIE",payload:e.data})})).catch((function(e){return console.log(e)}))}},setLoading:f})(R);var D=function(){return l.a.createElement(y.a,null,l.a.createElement("div",{className:"App"},l.a.createElement(u.a,{store:T},l.a.createElement("div",null,l.a.createElement(i,null),l.a.createElement(I.a,{exact:!0,path:"/",component:O}),l.a.createElement(I.a,{exact:!0,path:"/movie/:id",component:S}),l.a.createElement(k,null),l.a.createElement(p,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[41,1,2]]]);
//# sourceMappingURL=main.8cd5f707.chunk.js.map