import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import { Slider } from '../Slider/Slider';
import { ItemListContainer } from '../ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from '../ItemDetailContainer/ItemDetailContainer'
import { SeccionHarwarePrincipal } from '../SeccionHardwarePrincipal/SeccionHardwarePrincipal'
import { SeccionHarwareSecundaria } from '../SeccionHardwareSecundaria/SeccionHardwareSecundaria'

export const Home = () => { 


    return (
        <div>
            <BrowserRouter>
            <Slider/>
            <SeccionHarwarePrincipal/>
            <SeccionHarwareSecundaria/>
            <Routes>
                <Route path='*' element={<Navigate to={"/"}/>}/>
                <Route path='/productos/:categoryId' element={<ItemListContainer/>}/>
                <Route path='/detail/:itemId' element={<ItemDetailContainer/>}/>
            </Routes>
            </BrowserRouter>
        </div>
      )

}