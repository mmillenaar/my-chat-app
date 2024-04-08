import { ContactType } from '../../utils/types';
import { ReactComponent as ChevronRightIcon } from '../../assets/icons/double-chevron-right.svg'
import ActionLink from '../ActionLink/ActionLink';
import { useState } from 'react';
import { userStatusItems } from '../../utils/constants';
import './ContactGroup.scss';

interface ContactGroupProps {
    groupTitle: string;
    contacts: ContactType[];
}

const ContactGroup = ({ groupTitle, contacts }: ContactGroupProps) => {
    const [isGroupOpen, setIsGroupOpen] = useState<boolean>(true)

    const handleGroupTitleClick = () => {
        setIsGroupOpen(prevState => !prevState)
    }

    const groupStatus = userStatusItems.find(status => status.name === groupTitle)

    return (
        <div className="contact-group">
            <div className="contact-group__wrapper">
                <div className="contact-group__title" onClick={handleGroupTitleClick}>
                    <div className={`contact-group__title-icon contact-group__title-icon${isGroupOpen ? '--open' : ''}`}>
                        <ChevronRightIcon />
                    </div>
                    <p className="contact-group__title-text">{ groupTitle }</p>
                </div>
                <div className="contact-group__contacts">
                    {isGroupOpen && contacts.map((contact, index) => {
                        return (
                            <ActionLink
                                key={index}
                                url={`/chat/${contact.id}`}
                                text={contact.username}
                                imgSource={groupStatus?.icon}
                                imgAlt={groupStatus?.name}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default ContactGroup