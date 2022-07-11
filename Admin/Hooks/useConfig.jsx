import { useState } from 'react'
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import NumbersIcon from '@mui/icons-material/Numbers';
import AbcIcon from '@mui/icons-material/Abc';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import CircleIcon from '@mui/icons-material/Circle';
import WorkspacesIcon from '@mui/icons-material/Workspaces';
import {
    BooleanProperty,
    Color,
} from '@List';
import {
    DialogContext,
    DialogForm,
    Numeric,
} from '@Form'

const useConfig = () => {
    const getIcon = (type) => {
        switch (type) {
            case enums.configType.text:
                return AbcIcon
            case enums.configType.naturalNumber:
            case enums.configType.integer:
            case enums.configType.realNumber:
                return NumbersIcon
            case enums.configType.boolean:
            case enums.configType.nullableBoolean:
                return ToggleOffIcon
            case enums.configType.color:
                return ColorLensIcon
            case enums.configType.singleChoice:
                return CircleIcon
            case enums.configType.multipleChoice:
                return WorkspacesIcon
            default:
                return null
        }
    }

    const getProperty = ({
        entity,
        entityType,
        type,
    }) => {
        const [open, setOpen] = useState(false)
        switch (type) {
            case enums.configType.text:
                return null
            case enums.configType.naturalNumber:
            case enums.configType.integer:
            case enums.configType.realNumber:
                return <>
                    <span
                        className="cursor-pointer"
                        title='Click to change'
                        onClick={() => setOpen(true)}
                    >
                        <span>{entity.currentValue || 'NA'}</span>
                    </span>
                    <DialogContext.Provider
                        value={{
                            open,
                            setOpen,
                        }}
                    >
                        <DialogForm
                            title='Edit'
                            inputs={<Numeric 
                                column='Value'
                            />}
                            okAction={({
                                data,
                                error,
                                setProgress,
                                success,
                            }) => {
                                console.log(data)
                            }}
                        />

                    </DialogContext.Provider>
                </>
            case enums.configType.boolean:
            case enums.configType.nullableBoolean:
                return <BooleanProperty
                    column='currentValue'
                    value={entity.currentValue === true.toString() ? true : false}
                    actionUrl={(value) => `/${entityType}/setValue?id=${entity.id}&value=${value}`}
                />
            case enums.configType.color:
                return <Color
                    column='currentValue'
                    value={entity.currentValue || "000"}
                    action={(value) => `/${entityType}/setValue?id=${entity.id}&value=${value}`}
                />
            case enums.configType.singleChoice:
                return null
            case enums.configType.multipleChoice:
                return null
            default:
                return null
        }
    }

    return {
        getIcon,
        getProperty
    }
}

export default useConfig