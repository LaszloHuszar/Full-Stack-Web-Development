import { useEffect, useContext } from "react";
import alanBtn from '@alan-ai/alan-sdk-web';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ColorModeContext } from "./utils/ToggleColorMode";

const useAlan = () => {

    const {setMode} = useContext(ColorModeContext);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        alanBtn({
            key: 'fce8b36e87f5557c2519b091016406f92e956eca572e1d8b807a3e2338fdd0dc/stage',
            host: 'v1.alan.app',
            onCommand: ({command, mode}) => {
                
                if (command === 'changeMode') 
                {
                    if (mode === 'light') 
                    {
                        setMode('light')
                    }
                    else
                    {
                        setMode('dark')
                    }
                }
            }
        });
      }, [setMode]);

      return null;
};

export default useAlan;