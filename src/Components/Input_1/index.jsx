import React , { memo } from "react";
import "./style.css";


function Input_1 ({ type , Ref , onKeyUp , color , textColor , stickColor , placeholder })
{
    return (
        <div className="Input-1"
        style={
            {
                background: color ? color : "#fff",
            }
        }
        >
            <input
                type={type ? type : "text"} ref={Ref ? Ref : null}
                placeholder={placeholder ? placeholder : null}
                onKeyUp={onKeyUp ? onKeyUp : null}
                style={
                    {
                        color: textColor ? textColor : "#000",
                        borderBottom: `5px solid ${stickColor ? stickColor : "#000"}`
                    }
                }
            />
        </div>
    )
}


export default memo(Input_1);