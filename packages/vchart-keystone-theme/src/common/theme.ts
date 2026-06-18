import { ITheme } from '@visactor/vchart';
import { getCSSVariableValue } from '../design-tokens';

export type KeystoneTheme = ITheme & {
  component?: any;
  chart?: any;
  markByName?: any;
};

const isPlainObject = (value: unknown): value is Record<string, any> =>
  Object.prototype.toString.call(value) === '[object Object]';

const merge = <T extends Record<string, any>, U extends Record<string, any>>(target: T, source: U): T & U => {
  Object.keys(source).forEach(key => {
    const sourceValue = source[key];
    const targetValue = target[key];
    if (isPlainObject(targetValue) && isPlainObject(sourceValue)) {
      merge(targetValue, sourceValue);
    } else {
      (target as Record<string, any>)[key] = sourceValue;
    }
  });
  return target as T & U;
};

export const theme = {
  colorScheme: {
    default: Array.from({ length: 9 }, (_, i) => i + 1).map((i) =>
      getCSSVariableValue(`--ks-color-data-data${i}-fill`),
    ),
  },
  component: {
    axis: {
      label: {
        style: {
          fontFamily: 'TikTok Sans Text',
          pointerEvents: 'auto',
          color: getCSSVariableValue('--ks-ref-color-neutral-500'),
          fontSize: 12,
          fontStyle: 'normal',
          fontWeight: 400,
          lineHeight: 16,
        },
      },
      domainLine: {
        style: {
          stroke: getCSSVariableValue('--ks-ref-color-neutral-650'),
          strokeOpacity: 1,
          lineWidth: 0.5,
        },
      },
      tick: {
        inside: false,
        style: {
          stroke: getCSSVariableValue('--ks-ref-color-neutral-650'),
          strokeOpacity: 1,
          lineWidth: 0.5,
        },
      },
      grid: {
        style: {
          stroke: getCSSVariableValue('--ks-ref-color-neutral-900'),
          strokeOpacity: 1,
          lineWidth: 0.5,
        },
      },
      title: {
        position: 'start',
        angle: 0,
        padding: [20, 0, 0, 0],
        style: {
          textAlign: 'start',
          dy: -20,
          dx: 0,
          pointerEvents: 'auto',
          fill: getCSSVariableValue('--ks-ref-color-neutral-400'),
          fontSize: 12,
          fontStyle: 'normal',
          fontWeight: 400,
          lineHeight: 16,
        },
      },
    },
    discreteLegend: {
      position: 'end',
      orient: 'top',
      padding: 0,
      item: {
        spaceRow: 16,
        shape: {
          space: 4,
          style: {
            symbolType: 'circle',
            size: 6,
          },
        },
        label: {
          style: {
            pointerEvents: 'auto',
            color: getCSSVariableValue('--ks-ref-color-neutral-500'),
            fontSize: 12,
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: 16,
            letterSpacing: 0.161,
          },
        },
      },
    },
    crosshair: {
      xField: {
        line: {
          type: 'line',
        },
      },
    },
    tooltip: {
      panel: {
        backgroundColor: getCSSVariableValue('--ks-ref-color-neutral-200'),
        border: {
          radius: 4,
        },
      },
      titleLabel: {
        fontColor: getCSSVariableValue('--ks-ref-color-white'),
        fontSize: 12,
        fontWeight: 400,
        lineHeight: 16,
      },
      keyLabel: {
        fontColor: getCSSVariableValue('--ks-ref-color-neutral-500'),
        fontSize: 12,
        fontWeight: 400,
        lineHeight: 16,
      },
      valueLabel: {
        fontColor: getCSSVariableValue('--ks-ref-color-white'),
        fontSize: 12,
        fontWeight: 500,
        lineHeight: 16,
        textAlign: 'center',
        spacing: 0,
      },
      group: {
        shapeType: 'circle',
      },
    },
  },
  chart: {
    line: {
      component: {
        crosshair: {
          xField: {
            visible: false,
            line: {
              type: 'line',
              style: {
                lineWidth: 1,
                stroke: getCSSVariableValue('--ks-ref-color-neutral-350'),
                strokeOpacity: 1,
                lineDash: [2, 2],
              },
            },
          },
          yField: {
            visible: false,
          },
        },
      },
      markByName: {
        point: {
          style: {
            size: 0,
            innerBorder: {
              stroke: getCSSVariableValue('--ks-ref-color-white'),
              distance: 3,
              lineWidth: 2,
            },
          },
          state: {
            dimension_hover: {
              size: 8,
              innerBorder: {
                stroke: getCSSVariableValue('--ks-ref-color-white'),
                distance: 3,
                lineWidth: 2,
              },
            },
            hover: {
              size: 8,
              innerBorder: {
                distance: 1,
                lineWidth: 0,
              },
            },
          },
        },
      },
    },
    area: {
      component: {
        crosshair: {
          xField: {
            visible: false,
            line: {
              type: 'line',
              style: {
                lineWidth: 1,
                stroke: getCSSVariableValue('--ks-ref-color-neutral-350'),
                strokeOpacity: 1,
                lineDash: [2, 2],
              },
            },
          },
          yField: {
            visible: false,
          },
        },
      },
      markByName: {
        point: {
          style: {
            size: 0,
            innerBorder: {
              stroke: getCSSVariableValue('--ks-ref-color-white'),
              distance: 3,
              lineWidth: 2,
            },
          },
          state: {
            dimension_hover: {
              size: 8,
              innerBorder: {
                stroke: getCSSVariableValue('--ks-ref-color-white'),
                distance: 3,
                lineWidth: 2,
              },
            },
            hover: {
              size: 10,
              innerBorder: {
                distance: 1,
                lineWidth: 0,
              },
            },
          },
        },
      },
    },
    bar: {
      component: {
        crosshair: {
          xField: {
            visible: false,
            line: {
              type: 'rect',
              style: {
                fill: '#F1F2F2',
              },
              width: '110%',
            },
          } as any,
          yField: {
            visible: false,
          },
        },
      },
    },
    pie: {
      markByName: {
        label: {
          visible: true,
          style: {
            type: 'text',
            html: (data: any) => ({
              pointerEvents: 'auto',
              dom: data.value,
            }),
            react: (data: any) => ({
              pointerEvents: 'auto',
              element: data.value,
            }),
          },
        },
      },
      mark: {
        arc: {
          style: {
            padAngle: 0.01,
          },
        },
      },
    },
    common: {
      markByName: {
        point: {
          style: {
            size: 0,
            innerBorder: {
              stroke: getCSSVariableValue('--ks-ref-color-white'),
              distance: 3,
              lineWidth: 2,
            },
          },
          state: {
            dimension_hover: {
              size: 8,
              innerBorder: {
                stroke: getCSSVariableValue('--ks-ref-color-white'),
                distance: 3,
                lineWidth: 2,
              },
            },
            hover: {
              size: 10,
              innerBorder: {
                distance: 1,
                lineWidth: 0,
              },
            },
          },
        },
      },
      series: {
        // pie: {
        //   label: {
        //     visible: true,
        //     style: {
        //       type: 'text',
        //       formatMethod: () => '',
        //       fillOpacity: 0,
        //       html: (data: any) => ({
        //         pointerEvents: 'auto',
        //         dom: `${data.value}%`,
        //         style: {
        //           fontSize: '12px',
        //           fontStyle: 'normal',
        //           fontWeight: 400,
        //           color: getCSSVariableValue('--ks-ref-color-neutral-450'),
        //           letterSpacing: '0.161px',
        //           lineHeight: '16px',
        //           height: 16,
        //         },
        //       }),
        //     },
        //     line: {
        //       zIndex: 0,
        //       style: {
        //         stroke: getCSSVariableValue('--ks-ref-color-neutral-900'),
        //       },
        //     },
        //   },
        // },
      },
    },
  },
  markByName: {
    area: {
      style: {
        fillOpacity: 0.2,
      },
    },
  },
} as KeystoneTheme;

export const cornerRadiusSizeMap = {
  vertical: {
    xs: [2, 2, 0, 0],
    sm: [4, 4, 0, 0],
    md: [4, 4, 0, 0],
    lg: [4, 4, 0, 0],
    xl: [4, 4, 0, 0],
  },
  horizontal: {
    xs: [0, 2, 2, 0],
    sm: [0, 4, 4, 0],
    md: [0, 4, 4, 0],
    lg: [0, 4, 4, 0],
    xl: [0, 4, 4, 0],
  },
};
export const widthSizeMap = {
  xs: 8,
  sm: 16,
  md: 24,
  lg: 32,
  xl: 40,
};
export const getBarTheme = ({
  stack: isStack,
  size,
  direction = 'vertical',
  legendSize = 'md',
  isRtl = false,
}: {
  stack: boolean;
  size: keyof (typeof cornerRadiusSizeMap)['horizontal'];
  direction: 'vertical' | 'horizontal';
  legendSize: LegendSize;
  isRtl: boolean;
}) => {
  // const widthStyle = direction === 'vertical' ? 'width' : 'height';
  const barTheme = {
    ...getTheme({ legendSize, isRtl }),
    markByName: {
      ...theme.markByName,
      bar: {
        style: {
          cornerRadius: !isStack ? cornerRadiusSizeMap[direction][size] : undefined,
          // [widthStyle]: widthSizeMap[size],
        },
      },
    },
  };
  return barTheme as ITheme;
};

export type LegendSize = 'md' | 'lg';

export const legendSizeMap = {
  md: 6,
  lg: 8,
};
export const getTheme = ({ legendSize = 'md', isRtl = false }: { legendSize: LegendSize; isRtl?: boolean }): KeystoneTheme =>
  merge(theme, {
    component: {
      discreteLegend: {
        position: isRtl ? 'start' : 'end',
        orient: 'top',
        reversed: isRtl,
        item: {
          spaceRow: 16,
          shape: {
            space: 4,
            style: {
              symbolType: 'circle',
              size: legendSizeMap[legendSize],
            },
          },
        },
      },
    },
  }) as ITheme;
