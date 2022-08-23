const { useEffect, useState } = React;
const { Container, Draggable } = ReactSmoothDnD;

const DATA = [
{
  id: 'af3',
  label: 'Incoming leads',
  items: [
  { id: 'af35', label: 'مَعَ اْلمَغْرِبِ' },
  { id: 'af36', label: 'جَمْعَ تَقْدِيْمٍ' },
  { id: 'af34', label: 'مَجْمُوْعًا' },
  { id: 'af33', label: 'أربع رَكعَاتٍ' },
  { id: 'af31', label: 'أُصَلِّي' },
  { id: 'af32', label: 'فَرْضَ اْلعِشَاءِ' },
  { id: 'af37', label: 'للهِ تَعَالى' }],

  tint: 1 },

];

function LeadsOverview({})
{
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Mock an API call.
    setItems(DATA);
  }, []);

  return (
    React.createElement("div", null,
    React.createElement(Container, {
      getChildPayload: index => {
        return items[index];
      },
      onDrop: dropResult => {
        setItems(applyDrag(items, dropResult));
      } },

    items && items.map((item, groupIndex) => {
      return (
        React.createElement(Draggable, { key: item.id },
        React.createElement("div", { className: `holder holder--tint-${item.tint}` },
        React.createElement("div", { className: "holder__title" },
        item.label),

        React.createElement("div", { className: "holder__content" },
        React.createElement(Container, {
          className: "list",
          getChildPayload: index => {
            return items[groupIndex].items[index];
          },
          groupName: "LEADS_OVERVIEW",
          onDrop: dropResult => {
            const newValue = applyDrag(items[groupIndex].items, dropResult);
            const workValue = items.slice();
            workValue[groupIndex] = {
              ...items[groupIndex],
              items: newValue };


            setItems(workValue);
          } },

        item.items.map((lead) =>
        React.createElement(Draggable, { className: "list__item", key: lead.id },
        React.createElement("div", { className: "card" },
        lead.label))))))));

    }))));

}

function App()
{
  return (
    React.createElement("div", { className: "layout__wrapper" },
    React.createElement("div", { className: "layout__header" },
    React.createElement("div", { className: "app-bar" },
    React.createElement("div", { className: "app-bar__title" }, "Niat Sholat Isya Jamak Takdim dengan Sholat Maghrib"))),

    React.createElement(LeadsOverview, null)));

}

ReactDOM.render(
React.createElement(App, null),
document.getElementById('root'));


/* Utils */
function applyDrag(iterable, dropResult)
{
  const { addedIndex, payload, removedIndex } = dropResult;

  const workValue = iterable.slice();

  if (null !== removedIndex) {
    workValue.splice(removedIndex, 1);
  }

  if (null !== addedIndex) {
    workValue.splice(addedIndex, 0, payload);
  }

  return workValue;
}