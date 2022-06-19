import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import WarningAmberOutlinedIcon from '@mui/icons-material/WarningAmberOutlined';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import { DialogForm, Browse as BrowseInput } from '@Form';
import { Browse } from '@Browse';
import { DatePart, TimePart } from '@List';

const card = (item) => {

    const getIcon = () => {
        switch (item.typeKey.toLowerCase()) {
            case 'success':
                return <CheckCircleOutlineOutlinedIcon className="text-green-600" />
            case 'info':
                return <InfoOutlinedIcon className="text-blue-600" />
            case 'warning':
                return <WarningAmberOutlinedIcon className="text-yellow-600" />
            case 'error':
                return <ErrorOutlineOutlinedIcon className="text-red-600" />
            default:
                return <div>No icon</div>
        }
    }

    return <>
        <div
            dir='ltr'
            className="flex flex-row items-center gap-4 mb-4 "
        >
            <div>{getIcon()}</div>
            <DatePart value={item.utcDate} />
            <TimePart value={item.utcDate} />
        </div>
        <p
            dir='ltr'
            style={{ overflowWrap: 'anywhere' }}
        >{item.text}</p>
    </>
}

const ConfigItemBrowser = () => {
    return <Browse
        entityType='log'
        card={card}
    />
}

const inputs = <>
    <BrowseInput
        column='configItemId'
        browser={ConfigItemBrowser}
        placeholder='Config item'
        display={(item) => item.name}
        choose={(item) => item.id}
        required='You should choose configuration item'
    />
</>

const CreateSystemConfig = () => {
    return <DialogForm
        title="Create system config"
        entityType='systemConfig'
        inputs={inputs}
    />
}

export default CreateSystemConfig