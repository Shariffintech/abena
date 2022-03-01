import {Strategy} from './strategy';

export default function StrategyContainer(props) {

    return (
        <div className="strategy-container">
            <Strategy
                name={props.name}
                reference={props.reference}
                description={props.description}
                tier={props.tier}
                category={props.category}
                strategy={props.id}
            />
        </div>
    )
}