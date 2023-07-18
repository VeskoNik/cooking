import React from "react";


const Testimonials = () => {
    return (
        <div className="col_w270 col_w270_last">
            <h2>Testimonials</h2>
            <blockquote>
                <p align="justify">
                    Vivamus vulputate felis. Etiam luctus. Quisque facilisis suscipit
                    elit. Curabitur eleifend congue leo. Mauris pede nisl, placerat
                    nec, lobortis vitae, dictum sed, neque. Validate{" "}
                    <a href="http://validator.w3.org/check?uri=referer" rel="nofollow">
                        <strong>XHTML</strong>
                    </a>{" "}
                    &amp;{" "}
                    <a href="http://jigsaw.w3.org/css-validator/check/referer" rel="nofollow">
                        <strong>CSS</strong>
                    </a>
                    .
                </p>
                <cite>
                    George - <span>Web Developer</span>
                </cite>
            </blockquote>
            <div className="cleaner_h20"></div>
            <blockquote>
                <p align="justify">
                    Nam diam tellus, vehicula semper rhoncus quis, consequat sit amet
                    enim. Cras in turpis tortor. Nullam commodo, lorem id varius
                    hendrerit, est tortor rutrum erat, vel feugiat tortor odio nec
                    velit.
                </p>
                <cite>
                    Adrian - <span>Web Designer</span>
                </cite>
            </blockquote>
        </div>
    );
};

export default Testimonials;