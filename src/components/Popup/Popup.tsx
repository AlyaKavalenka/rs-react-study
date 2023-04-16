import './Popup.scss';

interface IPopup {
  popup: boolean;
  name: string;
}

export default function Popup(props: IPopup) {
  const { popup, name } = props;

  return (
    <aside className={popup ? 'popup_active' : 'popup'}>
      <h3>A card with the name &#34;{name}&#34; has been created</h3>
    </aside>
  );
}
