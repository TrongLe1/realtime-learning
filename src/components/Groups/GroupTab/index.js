import React from "react";
import GroupsManage from "../GroupsManage";

function GroupTab() {
    return (
        <>
            <div class="block block-rounded">
                <ul class="nav nav-tabs nav-tabs-block" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="btabs-static-home-tab" data-bs-toggle="tab" data-bs-target="#btabs-static-home" role="tab" aria-controls="btabs-static-home" aria-selected="true">Group I managed</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="btabs-static-profile-tab" data-bs-toggle="tab" data-bs-target="#btabs-static-profile" role="tab" aria-controls="btabs-static-profile" aria-selected="false" tabindex="-1">Group I've joined</button>
                    </li>
                </ul>
                <div class="block-content tab-content">
                    <div class="tab-pane active show" id="btabs-static-home" role="tabpanel" aria-labelledby="btabs-static-home-tab" tabindex="0">
                        <GroupsManage/>
                    </div>
                    <div class="tab-pane" id="btabs-static-profile" role="tabpanel" aria-labelledby="btabs-static-profile-tab" tabindex="0">
                        <GroupsManage/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GroupTab;
