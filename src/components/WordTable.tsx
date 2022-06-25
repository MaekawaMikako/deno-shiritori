import React from "react";

export type Word = {
    id: number;
    message: string;
    completed: boolean;
};

export type WordTableProps = {
    words: Word[];
};

export const WordTable: React.VFC<WordTableProps> = (props) => {
    return (
        <table>
            <tbody>
                {props.words.map((word:Word) => {
                    return (
                        <tr>
                            <td>
                                {word.id}
                            </td>
                            <td>
                                {word.message}
                            </td>
                        </tr>
                    )})}
            </tbody>
        </table>
    );
}
