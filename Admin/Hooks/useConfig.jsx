import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import NumbersIcon from '@mui/icons-material/Numbers';
import AbcIcon from '@mui/icons-material/Abc';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import CircleIcon from '@mui/icons-material/Circle';
import WorkspacesIcon from '@mui/icons-material/Workspaces';

const useConfig = () => {
    const getIcon = (type) => {
        switch (type.toLowerCase()) {
            case 'text':
                return AbcIcon
            case 'naturalnumber':
            case 'integer':
            case 'realnumber':
                return NumbersIcon
            case 'boolean':
            case 'nullableboolean':
                return ToggleOffIcon
            case 'color':
                return ColorLensIcon
            case 'singlechoice':
                return CircleIcon
            case 'multiplechoice':
                return WorkspacesIcon
            default:
                return null
        }
    }

    return {
        getIcon
    }
}

export default useConfig