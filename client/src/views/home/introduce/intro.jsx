import React from "react";
import image from "../../../images/templatemo_image_04.jpg"

const Intro = () => {
    return (
        <div className="col_w590 float_l">
            <h2>Introducing Tomato Template</h2>
            <div className="image_wrapper fl_img">
                <a href="#">
                    <img src={image} alt="image" />
                </a>
            </div>
            <p>
                <em>
                    Morbi sed nulla ac est cursus suscipit eu ac lectus. Curabitur
                    ullamcorper nibh nisi, sed eleifend dolor. Pellentesque adipiscing
                    sollicitudin sapien nec aliquet.
                </em>
            </p>
            <p align="justify">
                Praesent volutpat dolor at nulla egestas in vestibulum mauris
                lacinia. Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. Quisque tincidunt commodo nisl.
                Morbi dui nulla, tristique viverra, commodo mollis, ultricies ut,
                augue. Quisque ut odio. Etiam fringilla vestibulum nulla.{" "}
                <a href="#">Suspendisse</a> venenatis. Cum sociis natoque penatibus
                et magnis dis parturient montes, nascetur ridiculus mus.
            </p>
            <p align="justify">
                Quisque at nulla eu elit adipiscing tempor. Nunc at lectus. Aliquam
                tristique dolor ac odio. Sed consectetur, lacus et dictum tristique,
                odio neque elementum ante, nec eleifend leo dolor vel tortor.
                Vivamus vulputate felis. Etiam luctus. Quisque facilisis suscipit
                elit. Curabitur eleifend congue leo. Donec a purus vel purus
                sollicitudin placerat. Nunc at sem. Sed pellentesque placerat
                augue. Mauris pede nisl, placerat nec, lobortis vitae, dictum sed,
                neque.
            </p>
            <ul className="templatemo_list col_w270">
                <li>Aliquam pretium porta odio</li>
                <li>Suspendisse ac magna quis</li>
                <li>Quisque blandit eros et lorem</li>
            </ul>
            <ul className="templatemo_list col_w270 col_w270_last">
                <li>Nulla sed leo sed sapien</li>
                <li>Integer pellentesque dignissim</li>
                <li>Vivamus vulputate felis</li>
            </ul>
            <div className="cleaner"></div>
           
        </div>
    );
};

export default Intro;