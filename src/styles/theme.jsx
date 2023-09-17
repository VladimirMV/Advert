export const theme = Object.freeze({
  colors: {
    textPrimary: '#121417',
        textSecondary: '#8A8A89',
        textAdditional: '#363535',
        textBtn: '#ffffff',
        textAccent: '#3470FF',
        textTransparentPrimary: 'rgba(18, 20, 23, 0.50)',
        textTransparentSecondary: 'rgba(18, 20, 23, 0.20)',
        bgPrimary: '#ffffff',
        bgSecondary: '#F7F7FB',
        bgAccent: '#3470FF',
        bgAccentHover: '#0B44CD',
        bgScroll: 'rgba(18, 20, 23, 0.05)',
        bgBackdrop: 'rgba(18, 20, 23, 0.50)',
        bgAdditional: '#F9F9F9',
        borderPrimary: 'rgba(18, 20, 23, 0.05)',
        borderSecondary: 'rgba(18, 20, 23, 0.10)',
        borderAdditional: 'rgba(138, 138, 137, 0.20)',
        iconPrimary: 'rgba(255, 255, 255, 0.8)',
        iconAccent: '#3470FF',
        white: '#ffffff',
  },

  fontSizes: {
    ultraSmall: '12px',
    small: '14px',
    medium: '16px',
    large: '18px',

    inputText: '17px',

    smallTitle: '24px',
    titlePhone: '28px',
    title: '40px',

    sectionTitlePhone: '32px',
    sectionTitleTablet: '56px',
    sectionTitle: '64px',

    desktop404: '150px',
    phone404: '120px',
  },

  transitions: {
    cubicBezier: 'cubic-bezier(0.4, 0, 0.2, 1)',
},

  spacing: value => `${4 * value}px`,

  shadows: {
    regular: '0px 4px 10px 4px #9e9e9e',
    light: '2px 2px 25px rgba(255, 255, 255, 0.99)',
  },

  animation: value => {
    const animationValue = value.split(',').map(property => {
      return `${property.trim()} 0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98)`;
    });
    return animationValue.join(', ');
  },
});
