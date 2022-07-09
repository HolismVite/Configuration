import ConfigItems from './ConfigItem/List';
import EntityConfigItems from './EntityConfigItem/List';
import EntityConfigs from './EntityConfigs/List'
import EntityTypeConfigs from './EntityTypeConfig/List'
import Settings from './Settings'
import SettingsIcon from '@mui/icons-material/Settings';
import SystemConfigs from './SystemConfig/List'

const ConfigurationRoutes = [
    {
        path: '/configItems',
        component: ConfigItems
    },
    {
        path: "/systemConfigs",
        component: SystemConfigs
    },
    {
        path: "/entityTypeConfig",
        component: EntityTypeConfigs
    },
    {
        path: "/entityConfigs",
        component: EntityConfigs
    },
    {
        path: "/entityConfigItems",
        component: EntityConfigItems
    },
    {
        path: "/settings",
        component: Settings
    },
]

const ConfigurationMenu = [
    {
        title: "Configurations",
        "icon": SettingsIcon,
        children: [
            {
                title: "Config Items",
                url: "/configItems"
            },
            {
                title: "System",
                url: "/systemConfigs"
            },
            {
                title: "Entity types",
                url: "/entityTypeConfigs"
            },
            {
                title: "Entity Config Items",
                url: "/entityConfigItems"
            },
            {
                title: "Entities",
                url: "/entityConfigs"
            },
            {
                title: "Users",
                url: "/userConfigs"
            }
        ]
    }
]

export { ConfigItems }
export { ConfigurationMenu }
export { ConfigurationRoutes }
export { EntityConfigItems }
export { EntityConfigs }
export { EntityTypeConfigs }
export { Settings }
export { SystemConfigs }