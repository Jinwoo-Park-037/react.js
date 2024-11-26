import { useEffect, useState } from "react";
import dummy from "../db/menu.json";

export default function Menu()
{
    


    return (
        <div className = "menu">
            <table>
                <tr className = "menu_item">
                    <th class = "menu_name menu_cell">
                        Menu
                    </th>
                    <th class = "menu_price menu_cell">
                        M
                    </th>
                    <th class = "menu_price menu_cell">
                        L
                    </th>
                </tr>
                {dummy.coffee.map(coffee => (
                    <tr key = {coffee.name} className = "menu_item">
                        <td class = "menu_name menu_cell">
                            {coffee.name}
                        </td>
                        <td class = "menu_price menu_cell">{coffee.price_medium}</td>
                        <td class = "menu_price menu_cell">{coffee.price_large}</td>
                    </tr>
                ))}

                {dummy.tea.map(tea => (
                    <tr key = {tea.name} className = "menu_item">
                        <td class = "menu_name menu_cell">
                            {tea.name}
                        </td>
                        <td class = "menu_price menu_cell">{tea.price_medium}</td>
                        <td class = "menu_price menu_cell">{tea.price_large}</td>
                    </tr>
                ))}
            </table>
        </div>
    );

}


