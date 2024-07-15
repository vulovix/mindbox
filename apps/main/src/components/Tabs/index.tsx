import './styles.scss';

interface TabsProps {
    activeTab: number;
    tabs: { icon?: undefined | React.FC<any>, label?: undefined | string }[];
    onTabChange: (event: React.MouseEvent<HTMLDivElement>) => void;
    className?: string;
}

export const Tabs: React.FC<TabsProps> = ({ activeTab, tabs, onTabChange, className = '' }) => {

    return (
        <div className={`tabs ${className}`}>
            {tabs.map((tab, i) => {
                const Icon = tab.icon;
                let className = 'tab';
                if (i === activeTab) {
                    className += ' active';
                }
                return (
                    <div className={className} key={i} data-index={i} onClick={onTabChange}>
                        {Icon ? <><Icon className="tab-icon" />&nbsp;&nbsp;</> : <></>}{tab.label}
                    </div>
                );
            })}
        </div>
    );
};

