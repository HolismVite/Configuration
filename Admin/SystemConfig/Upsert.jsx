import { DialogForm, Browse as BrowseInput } from '@Form';
import { Browse } from '@Browse';

const card = (item) => {

    return <>
        <div
            dir='ltr'
            className="flex flex-row items-center gap-4 mb-4 "
        >
            <div>{item.name}</div>
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

const UpsertSystemConfig = () => {
    return <DialogForm
        entityType='SystemConfig'
        humanReadableEntityType='System Config'
        inputs={inputs}
    />
}

export default UpsertSystemConfig