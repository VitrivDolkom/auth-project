import { Link } from 'react-router-dom';

import { RoutePath } from '@/shared/const/routes';

import s from './style.module.scss';

interface Props {
  to: RoutePath;
  text: string;
}

export const FormLinkToPage = ({ to, text }: Props) => (
  <Link to={to} className={s.link}>
    {text}
  </Link>
);
