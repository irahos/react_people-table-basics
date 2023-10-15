import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { Person } from '../../types';

interface Props {
  person: Person;
}

const FEMALE_GENDER = 'f';

export const PersonLink: React.FC<Props> = ({ person }) => (
  <Link
    to={person.slug}
    className={classNames({
      'has-text-danger': person.sex === FEMALE_GENDER,
    })}
  >
    {person.name}
  </Link>
);
