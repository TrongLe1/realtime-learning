import React from "react";
import { Card, Button, Container, Row } from "react-bootstrap";
import Navbar from "../Navbar";

function GroupsManage() {
    return (
        <>
            <Navbar></Navbar>
            
            <div class="content content-boxed">
            <div class="input-group">
                <button type="button" class="btn btn-primary">
                    <i class="fa fa-search me-1 opacity-50"></i> Search
                </button>
                <input type="text" id="example-group3-input1" name="example-group3-input1" placeholder="Group name" style={{width: "18rem"}}/>
            </div>
                <div class="row items-push py-4">
                    <div class="col-md-6 col-lg-4 col-xl-3">
                        <a class="block block-rounded block-link-pop h-100 mb-0" href="be_pages_elearning_course.html">
                            <div class="block-content block-content-full text-center bg-city">
                                <div class="item item-2x item-circle bg-white-10 py-3 my-3 mx-auto">
                                    <i class="fab fa-html5 fa-2x text-white-75"></i>
                                </div>
                                <div class="fs-sm text-white-75">
                                    10 Users 
                                </div>
                            </div>
                            <div class="block-content block-content-full">
                                <h4 class="h5 mb-1">
                                    Learn HTML5 in 10 simple and easy to follow steps
                                </h4>
                                <div class="fs-sm text-muted">November 5, 2021</div>
                            </div>
                        </a>
                    </div>
                    <div class="col-md-6 col-lg-4 col-xl-3">
                        <a class="block block-rounded block-link-pop h-100 mb-0" href="be_pages_elearning_course.html">
                            <div class="block-content block-content-full text-center bg-flat">
                                <div class="item item-2x item-circle bg-white-10 py-3 my-3 mx-auto">
                                    <i class="fab fa-css3 fa-2x text-white-75"></i>
                                </div>
                                <div class="fs-sm text-white-75">
                                    12 Users  
                                </div>
                            </div>
                            <div class="block-content block-content-full">
                                <h4 class="h5 mb-1">
                                    Be a pro with CSS3 in only two weeks
                                </h4>
                                <div class="fs-sm text-muted">November 1, 2021</div>
                            </div>
                        </a>
                    </div>
                    <div class="col-md-6 col-lg-4 col-xl-3">
                        <a class="block block-rounded block-link-pop h-100 mb-0" href="be_pages_elearning_course.html">
                            <div class="block-content block-content-full text-center bg-amethyst">
                                <div class="item item-2x item-circle bg-white-10 py-3 my-3 mx-auto">
                                    <i class="si si-vector fa-2x text-white-75"></i>
                                </div>
                                <div class="fs-sm text-white-75">
                                    4 Users  
                                </div>
                            </div>
                            <div class="block-content block-content-full">
                                <h4 class="h5 mb-1">
                                    Using SVG is easier than ever
                                </h4>
                                <div class="fs-sm text-muted">October 27, 2021</div>
                            </div>
                        </a>
                    </div>
                    <div class="col-md-6 col-lg-4 col-xl-3">
                        <a class="block block-rounded block-link-pop h-100 mb-0" href="be_pages_elearning_course.html">
                            <div class="block-content block-content-full text-center bg-smooth">
                                <div class="item item-2x item-circle bg-white-10 py-3 my-3 mx-auto">
                                    <i class="si si-rocket fa-2x text-white-75"></i>
                                </div>
                                <div class="fs-sm text-white-75">
                                    18 Users  
                                </div>
                            </div>
                            <div class="block-content block-content-full">
                                <h4 class="h5 mb-1">
                                    Build a modern web application from scratch
                                </h4>
                                <div class="fs-sm text-muted">October 25, 2021</div>
                            </div>
                        </a>
                    </div>
                    <div class="col-md-6 col-lg-4 col-xl-3">
                        <a class="block block-rounded block-link-pop h-100 mb-0" href="be_pages_elearning_course.html">
                            <div class="block-content block-content-full text-center bg-default">
                                <div class="item item-2x item-circle bg-white-10 py-3 my-3 mx-auto">
                                    <span class="fs-lg fw-bold text-white-75">PS</span>
                                </div>
                                <div class="fs-sm text-white-75">
                                    5 Users  
                                </div>
                            </div>
                            <div class="block-content block-content-full">
                                <h4 class="h5 mb-1">
                                    UI Design in Photoshop: Tips  &amp; Tricks
                                </h4>
                                <div class="fs-sm text-muted">October 10, 2021</div>
                            </div>
                        </a>
                    </div>
                    <div class="col-md-6 col-lg-4 col-xl-3">
                        <a class="block block-rounded block-link-pop h-100 mb-0" href="be_pages_elearning_course.html">
                            <div class="block-content block-content-full text-center bg-modern">
                                <div class="item item-2x item-circle bg-white-10 py-3 my-3 mx-auto">
                                    <i class="si si-user-following fa-2x text-white-75"></i>
                                </div>
                                <div class="fs-sm text-white-75">
                                    9 Users  
                                </div>
                            </div>
                            <div class="block-content block-content-full">
                                <h4 class="h5 mb-1">
                                    Marketing 101: All the basics
                                </h4>
                                <div class="fs-sm text-muted">October 1, 2021</div>
                            </div>
                        </a>
                    </div>
                    <div class="col-md-6 col-lg-4 col-xl-3">
                        <a class="block block-rounded block-link-pop h-100 mb-0" href="be_pages_elearning_course.html">
                            <div class="block-content block-content-full text-center bg-warning">
                                <div class="item item-2x item-circle bg-white-10 py-3 my-3 mx-auto">
                                    <i class="si si-target fa-2x text-white-75"></i>
                                </div>
                                <div class="fs-sm text-white-75">
                                    5 Users  
                                </div>
                            </div>
                            <div class="block-content block-content-full">
                                <h4 class="h5 mb-1">
                                    How to make your page convert in 5 steps
                                </h4>
                                <div class="fs-sm text-muted">September 19, 2021</div>
                            </div>
                        </a>
                    </div>
                    <div class="col-md-6 col-lg-4 col-xl-3">
                        <a class="block block-rounded block-link-pop h-100 mb-0" href="be_pages_elearning_course.html">
                            <div class="block-content block-content-full text-center bg-success">
                                <div class="item item-2x item-circle bg-white-10 py-3 my-3 mx-auto">
                                    <i class="si si-support fa-2x text-white-75"></i>
                                </div>
                                <div class="fs-sm text-white-75">
                                    21 Users  
                                </div>
                            </div>
                            <div class="block-content block-content-full">
                                <h4 class="h5 mb-1">
                                    How to provide rock star support
                                </h4>
                                <div class="fs-sm text-muted">September 15, 2021</div>
                            </div>
                        </a>
                    </div>
                    <div class="col-md-6 col-lg-4 col-xl-3">
                        <a class="block block-rounded block-link-pop h-100 mb-0" href="be_pages_elearning_course.html">
                            <div class="block-content block-content-full text-center bg-info">
                                <div class="item item-2x item-circle bg-white-10 py-3 my-3 mx-auto">
                                    <i class="si si-social-twitter fa-2x text-white-75"></i>
                                </div>
                                <div class="fs-sm text-white-75">
                                    7 Users  
                                </div>
                            </div>
                            <div class="block-content block-content-full">
                                <h4 class="h5 mb-1">
                                    Social marketing the right way
                                </h4>
                                <div class="fs-sm text-muted">September 7, 2021</div>
                            </div>
                        </a>
                    </div>
                    <div class="col-md-6 col-lg-4 col-xl-3">
                        <a class="block block-rounded block-link-pop h-100 mb-0" href="be_pages_elearning_course.html">
                            <div class="block-content block-content-full text-center bg-danger">
                                <div class="item item-2x item-circle bg-white-10 py-3 my-3 mx-auto">
                                    <i class="si si-briefcase fa-2x text-white-75"></i>
                                </div>
                                <div class="fs-sm text-white-75">
                                    5 Users  
                                </div>
                            </div>
                            <div class="block-content block-content-full">
                                <h4 class="h5 mb-1">
                                    Project management in 5 simple steps
                                </h4>
                                <div class="fs-sm text-muted">August 28, 2021</div>
                            </div>
                        </a>
                    </div>
                    <div class="col-md-6 col-lg-4 col-xl-3">
                        <a class="block block-rounded block-link-pop h-100 mb-0" href="be_pages_elearning_course.html">
                            <div class="block-content block-content-full text-center bg-gray-dark">
                                <div class="item item-2x item-circle bg-white-10 py-3 my-3 mx-auto">
                                    <i class="si si-camcorder fa-2x text-white-75"></i>
                                </div>
                                <div class="fs-sm text-white-75">
                                    7 Users  
                                </div>
                            </div>
                            <div class="block-content block-content-full">
                                <h4 class="h5 mb-1">
                                    Learn how to create better screencasts
                                </h4>
                                <div class="fs-sm text-muted">August 19, 2021</div>
                            </div>
                        </a>
                    </div>
                    <div class="col-md-6 col-lg-4 col-xl-3">
                        <a class="block block-rounded block-link-pop h-100 mb-0" href="be_pages_elearning_course.html">
                            <div class="block-content block-content-full text-center bg-primary">
                                <div class="item item-2x item-circle bg-white-10 py-3 my-3 mx-auto">
                                    <i class="si si-chemistry fa-2x text-white-75"></i>
                                </div>
                                <div class="fs-sm text-white-75">
                                    12 Users  
                                </div>
                            </div>
                            <div class="block-content block-content-full">
                                <h4 class="h5 mb-1">
                                    Learn how to create jQuery plugins
                                </h4>
                                <div class="fs-sm text-muted">August 5, 2021</div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default GroupsManage;