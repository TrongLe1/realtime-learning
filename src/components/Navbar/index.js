import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <>
            <div class="bg-white p-3 push">
                <div class="d-lg-none">
                    <button type="button" class="btn w-100 btn-alt-secondary d-flex justify-content-between align-items-center" data-toggle="class-toggle" data-target="#horizontal-navigation-hover-normal" data-class="d-none">
                        Menu - Hover Normal
                        <i class="fa fa-bars"></i>
                    </button>
                </div>
                <div id="horizontal-navigation-hover-normal" class="d-none d-lg-block mt-2 mt-lg-0">
                    <ul class="nav-main nav-main-horizontal nav-main-hover">
                        <li class="nav-main-item">
                            <Link to={'/dashboard'} class="nav-main-link active" href="be_ui_navigation_horizontal.html">
                                <i class="nav-main-link-icon fa fa-home"></i>
                                <span class="nav-main-link-name">Home</span>
                                <span class="nav-main-link-badge badge rounded-pill bg-primary">5</span>
                            </Link>
                        </li>
                        <li class="nav-main-heading">Manage</li>
                        <li class="nav-main-item">
                            <Link to={'/groupmanage'} class="nav-main-link nav-main-link-submenu" data-toggle="submenu" aria-haspopup="true" aria-expanded="false">
                                <i class="si si-users fa-2x"></i>
                                <span class="nav-main-link-name">Groups</span>
                            </Link>
                            <ul class="nav-main-submenu">
                                <li class="nav-main-item">
                                    <a class="nav-main-link nav-main-link-submenu" data-toggle="submenu" aria-haspopup="true" aria-expanded="false" href="#">
                                        <i class="nav-main-link-icon fab fa-html5"></i>
                                        <span class="nav-main-link-name">Group I manage</span>
                                    </a>
                                    <a class="nav-main-link nav-main-link-submenu" data-toggle="submenu" aria-haspopup="true" aria-expanded="false" href="#">
                                        <i class="nav-main-link-icon fab fa-html5"></i>
                                        <span class="nav-main-link-name">Group I've joined</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li class="nav-main-item">
                            <a class="nav-main-link nav-main-link-submenu" data-toggle="submenu" aria-haspopup="true" aria-expanded="false" href="#">
                                <i class="far fa-2x fa-circle-question"></i>
                                <span class="nav-main-link-name">Quiz</span>
                            </a>
                            <ul class="nav-main-submenu">
                                <li class="nav-main-item">
                                    <a class="nav-main-link" href="javascript:void(0)">
                                        <span class="nav-main-link-name">Scheduled</span>
                                        <span class="nav-main-link-badge badge rounded-pill bg-success">3</span>
                                    </a>
                                </li>
                                <li class="nav-main-item">
                                    <a class="nav-main-link" href="javascript:void(0)">
                                        <span class="nav-main-link-name">Recurring</span>
                                    </a>
                                </li>
                                <li class="nav-main-item">
                                    <a class="nav-main-link" href="javascript:void(0)">
                                        <span class="nav-main-link-name">Manage</span>
                                    </a>
                                </li>
                                <li class="nav-main-item">
                                    <a class="nav-main-link" href="javascript:void(0)">
                                        <i class="nav-main-link-icon fa fa-plus"></i>
                                        <span class="nav-main-link-name">New Payment</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li class="nav-main-item">
                            <a class="nav-main-link nav-main-link-submenu" data-toggle="submenu" aria-haspopup="true" aria-expanded="false" href="#">
                                <i class="fab fa-2x fa-slideshare"></i>
                                <span class="nav-main-link-name">Slides</span>
                            </a>
                            <ul class="nav-main-submenu">
                                <li class="nav-main-item">
                                    <a class="nav-main-link" href="javascript:void(0)">
                                        <span class="nav-main-link-name">Hosting</span>
                                    </a>
                                </li>
                                <li class="nav-main-item">
                                    <a class="nav-main-link" href="javascript:void(0)">
                                        <span class="nav-main-link-name">Web Design</span>
                                    </a>
                                </li>
                                <li class="nav-main-item">
                                    <a class="nav-main-link" href="javascript:void(0)">
                                        <span class="nav-main-link-name">Web Development</span>
                                    </a>
                                </li>
                                <li class="nav-main-item">
                                    <a class="nav-main-link" href="javascript:void(0)">
                                        <span class="nav-main-link-name">Graphic Design</span>
                                    </a>
                                </li>
                                <li class="nav-main-item">
                                    <a class="nav-main-link" href="javascript:void(0)">
                                        <span class="nav-main-link-name">Legal</span>
                                    </a>
                                </li>
                                <li class="nav-main-item">
                                    <a class="nav-main-link" href="javascript:void(0)">
                                        <span class="nav-main-link-name">Consulting</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        
                        <li class="nav-main-heading">Personal</li>
                        <li class="nav-main-item ms-auto">
                            <a class="nav-main-link nav-main-link-submenu" data-toggle="submenu" aria-haspopup="true" aria-expanded="false" href="#">
                                <i class="nav-main-link-icon far fa-user"></i>
                                <span class="nav-main-link-name">Profile</span>
                            </a>
                            <ul class="nav-main-submenu">
                                <li class="nav-main-item">
                                    <a class="nav-main-link" href="javascript:void(0)">
                                        <span class="nav-main-link-name">Edit</span>
                                    </a>
                                </li>
                                <li class="nav-main-item">
                                    <a class="nav-main-link" href="javascript:void(0)">
                                        <span class="nav-main-link-name">Settings</span>
                                    </a>
                                </li>
                                <li class="nav-main-item">
                                    <a class="nav-main-link" href="javascript:void(0)">
                                        <span class="nav-main-link-name">Log out</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar;