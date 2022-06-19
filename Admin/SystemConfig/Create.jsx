import { DialogForm, Browse as BrowseInput } from '@Form';
import { Browse } from '@Browse';

const configItemCard = (item) => {
    return <>
        <div>{item.name}</div>
    </>
}

const ConfigItemBrowser = () => {
    return <Browse
        entityType='configItem'
        card={configItemCard}
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