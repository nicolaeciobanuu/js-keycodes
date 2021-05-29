import React from "react";
import { SC } from "../";
interface CodeDisplayProps {
    code: number;
}
export const CodeDisplay = ({code}: CodeDisplayProps) =>
    <SC.CodeDisplay>
        {!code? " " : code}
    </SC.CodeDisplay>