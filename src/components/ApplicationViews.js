import React from "react"
import { Route } from "react-router-dom"

export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "5rem 2rem",
            backgroundColor: "lightgoldenrodyellow"
        }}>
            Application views


            <GameProvider>
                <Route exact path="/">
                    <GameList />
                </Route>
            </GameProvider>
        </main>
    </>
}
