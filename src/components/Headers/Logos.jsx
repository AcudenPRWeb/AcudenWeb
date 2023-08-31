/*
 * Copyright (c) 2023 INPRENDE LLC. All rights reserved.
 *
 * This software is the confidential and proprietary information of INPRENDE LLC.
 * You shall not disclose such confidential information and shall use it only
 * in accordance with the terms of the license agreement you entered into with
 * INPRENDE LLC.
 */


import logoLoggedIn from "../../assets/images/logo-logged-in.svg";
import React from "react";
import { Link } from "react-router-dom";
import { PORTAL_ROUTES } from "../../config/config";

const Logos = () => {
    return(
        <Link to={PORTAL_ROUTES.LANDING_ROUTE} className="flex flex-row items-center gap-2">
            <img src={logoLoggedIn} width="40%"/>
            <img
                src="data:image/jpeg;base64,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"
                alt="logo"
                className="h-12"
            />
        </Link>
    );
}

export default Logos