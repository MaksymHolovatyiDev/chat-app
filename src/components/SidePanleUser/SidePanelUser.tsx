export function SidePanelUser() {
  return (
    <div>
      <img
        className="user__image"
        src="src/assets/chevron-down.svg"
        alt="User avatar."
      />
      <div className="user-name__container">
        <p className="user-name__text">name</p>
        <img src="src/assets/chevron-down.svg" alt="Chevron down svg." />
      </div>
    </div>
  );
}
