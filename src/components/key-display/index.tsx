import React from "react";
import { SC } from "../";

interface KeyDisplayProps {
    keyboardKey: string;
}
export const KeyDisplay = ({ keyboardKey }: KeyDisplayProps) =>

    <SC.KeyDisplay>
        {keyboardKey ? <SC.Keyboard> {keyboardKey} </SC.Keyboard> : " "}
    </SC.KeyDisplay>