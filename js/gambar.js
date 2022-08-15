  export default (props, { $f7, $on }) => {
    const photos = [
      {
        url: 'img/beach.jpg',
        caption: 'Amazing beach in Goa, India'
      },
      'http://placekitten.com/1024/1024',
      'img/lock.jpg',
      {
        url: 'img/monkey.jpg',
        caption: 'I met this monkey in Chinese mountains'
      },
      {
        url: 'img/mountains.jpg',
        caption: 'Beautiful mountains in Zhangjiajie, China'
      }
    ];

    let standalone;
    let popup;
    let page;
    let standaloneDark;
    let popupDark;
    let pageDark;

    const openStandalone = () => {
      standalone.open();
    }
    const openPopup = () => {
      popup.open();
    }
    const openPage = () => {
      page.open();
    }
    const openStandaloneDark = () => {
      standaloneDark.open();
    }
    const openPopupDark = () => {
      popupDark.open();
    }
    const openPageDark = () => {
      pageDark.open();
    }
    $on('pageInit', () => {
      // Create PBs when page init
      standalone = $f7.photoBrowser.create({
        photos: photos,
      });
      popup = $f7.photoBrowser.create({
        photos: photos,
        type: 'popup',
      });
      page = $f7.photoBrowser.create({
        photos: photos,
        type: 'page',
        backLinkText: 'Back',
      });
      standaloneDark = $f7.photoBrowser.create({
        photos: photos,
        theme: 'dark',
      });
      popupDark = $f7.photoBrowser.create({
        photos: photos,
        type: 'popup',
        theme: 'dark',
      });
      pageDark = $f7.photoBrowser.create({
        photos: photos,
        type: 'page',
        backLinkText: 'Back',
        theme: 'dark',
      });
    });
    $on('pageBeforeRemove', () => {
      // Destroy PBs on page remove
      standalone.destroy();
      popup.destroy();
      page.destroy();
      standaloneDark.destroy();
      popupDark.destroy();
      pageDark.destroy();
    });

    return $render;