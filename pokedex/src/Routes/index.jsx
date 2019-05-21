import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import routes from "./routes";
import ThemeContext from "../Themes/ThemeContext";
import MainLayout from "../Pages/MainLayout";
import Title from "../Components/Title";
import SelectTheme from "../Themes/SelectTheme";

const content = {
    width: '70%',
    border: '25px solid #000',
    borderRadius: '20px',
    position: 'relative',
    overflow: 'hidden',
};

function RenderRoutes(route) {
    const Component = route.component;
    return (
        <Route
            path={route.path}
            exact={route.exact}
            render={props => (
                <MainLayout>
                    <Title title={route.title} />
                    <Component {...props} routes={route.routes} />
                </MainLayout>
            )}
        />
    );
}

function ConfigureRoute() {
    return (
        <ThemeContext.Consumer>
            {({ theme, visibleTheme, closeMenu }) => (
                <ThemeProvider theme={theme}>
                    <div style={content}>
                        {visibleTheme && <SelectTheme onClose={closeMenu} />}
                        <Router>
                            {routes.map((route, i) => (
                                <RenderRoutes key={i} {...route} />
                            ))}
                        </Router>
                    </div>
                </ThemeProvider>
            )}
        </ThemeContext.Consumer>
    );
}

export { RenderRoutes };

export default ConfigureRoute;
