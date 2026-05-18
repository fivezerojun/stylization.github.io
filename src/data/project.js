const base = import.meta.env.BASE_URL

const withBase = (path) => `${base}${path.replace(/^\/+/, '')}`

export const project = {
  title: 'Semantically Consistent Text-to-Motion with Unsupervised Styles',
  venue: 'SIGGRAPH 2025',
  subtitle: 'Text-to-motion generation with unsupervised style references',
  news: 'SIGGRAPH 2025 Conference Paper',
  authors: [
    {
      name: 'Linjun Wu',
      affiliations: ['1'],
      homepage: 'https://fivezerojun.github.io/'
    },
    {
      name: 'Xiangjun Tang',
      affiliations: ['1'],
      homepage: 'https://yuyujunjun.github.io/'
    },
    { name: 'Jingyuan Cong', affiliations: ['2'] },
    { name: 'He Wang', affiliations: ['3'], homepage: 'http://drhewang.com/' },
    { name: 'Bo Hu', affiliations: ['4'] },
    { name: 'Xu Gong', affiliations: ['4'] },
    { name: 'Songnan Li', affiliations: ['4'] },
    { name: 'Yuchen Liao', affiliations: ['4'] },
    {
      name: 'Yiqian Wu',
      affiliations: ['1'],
      homepage: 'https://onethousandwu.com/'
    },
    { name: 'Chen Liu', affiliations: ['1'] },
    {
      name: 'Xiaogang Jin',
      affiliations: ['1'],
      homepage: 'http://www.cad.zju.edu.cn/home/jin/'
    }
  ],
  affiliations: [
    { id: '1', name: 'Zhejiang University' },
    { id: '2', name: 'University of California San Diego' },
    { id: '3', name: 'University College London' },
    { id: '4', name: 'Tencent Technology Co., Ltd.' }
  ],
  links: [
    {
      label: 'Paper',
      icon: 'Document',
      href: 'https://dl.acm.org/doi/10.1145/3721238.3730641'
    },
    {
      label: 'Video',
      icon: 'VideoCamera',
      href: 'https://www.youtube.com/watch?v=ZYCjhcN-T5s'
    },
    {
      label: 'Code',
      icon: 'Files',
      href: 'https://github.com/fivezerojun/Semantically-Consistent-Text-to-Motion-with-Unsupervised-Styles'
    }
  ],
  teaser: {
    src: withBase('static/images/teaser.jpeg'),
    alt: 'Generated motions driven by an unsupervised bird-gliding style reference.',
    caption:
      'A showcase of generated motions driven by the unsupervised style of bird gliding. Our method synthesizes motions by combining textual descriptions of desired motion content with unsupervised style reference motions.'
  },
  abstract:
    'Text-to-stylized human motion generation leverages text descriptions for motion generation with fine-grained style control with respect to a reference motion. However, existing approaches typically rely on supervised style learning with labeled datasets, constraining their adaptability and generalization for effective diverse style control. Additionally, they have not fully explored the temporal correlations between motion, textual descriptions, and style, making it challenging to generate semantically consistent motion with precise style alignment. To address these limitations, we introduce a novel method that integrates unsupervised style from arbitrary references into a text-driven diffusion model to generate semantically consistent stylized human motion. The core innovation lies in leveraging text as a mediator to capture the temporal correspondences between motion and style, enabling the seamless integration of temporally dynamic style into motion features. Specifically, we first train a diffusion model on a text-motion dataset to capture the correlation between motion and text semantics. A style adapter then extracts temporally dynamic style features from reference motions and integrates a novel Semantic-Aware Style Injection (SASI) module to infuse these features into the diffusion model. The SASI module computes the semantic correlation between motion and style features based on texts, selectively incorporating style features that align with motion content, ensuring semantic consistency and precise style alignment. Our style adapter does not require a labeled style dataset for training, enhancing adaptability and generalization of style control. Extensive evaluations show that our method outperforms previous approaches in terms of semantic consistency and style expressivity.',
  youtubeEmbed: 'https://www.youtube.com/embed/ZYCjhcN-T5s?rel=0&showinfo=0',
  pipeline: {
    text:
      'Our method takes text descriptions of motion content and unlabeled style reference motions as input, generating stylized motions that preserve semantic consistency with the content texts while aligning with the reference style. To achieve this, we first train a text-conditioned diffusion model, which combines a text encoder and a denoising U-Net model to enable motion generation from text prompts. Next, we train a style adapter, which utilizes a CNN style encoder to extract temporally dynamic style features from reference motions and injects these features into the U-Net layers through the Semantic-Aware Style Injection (SASI) module. The SASI module leverages text as a mediator to capture the temporal correspondences between motion latent and style features, injecting style features into the layers of the denoising U-Net.',
    src: withBase('static/images/pipeline.jpg'),
    alt: 'Pipeline of Semantic-Aware Style Injection.'
  },
  comparisonIntro:
    'We compare our model to three baseline methods: <a href="https://h-y1heng.github.io/StableMoFusion-page/" target="_blank" rel="noreferrer">StableMoFusion</a>+<a href="https://xingliangjin.github.io/MCM-LDM-Web/" target="_blank" rel="noreferrer">MCM_LDM</a>, <a href="https://h-y1heng.github.io/StableMoFusion-page/" target="_blank" rel="noreferrer">StableMoFusion</a>+<a href="http://www.cad.zju.edu.cn/home/jin/SigA20241/Decoupling_Contact.htm" target="_blank" rel="noreferrer">DecouplingContact</a>, and <a href="https://neu-vi.github.io/SMooDi/?ref=aiartweekly" target="_blank" rel="noreferrer">SMooDi</a>. When the motion involves multiple actions, our method seamlessly integrates distinct styles into corresponding actions.',
  bibtex: `@inproceedings{wu2025semantically,
  title={Semantically Consistent Text-to-Motion with Unsupervised Styles},
  author={Wu, Linjun and Tang, Xiangjun and Cong, Jingyuan and Wang, He and Hu, Bo and Gong, Xu and Li, Songnan and Liao, Yuchen and Wu, Yiqian and Liu, Chen and others},
  booktitle={Proceedings of the Special Interest Group on Computer Graphics and Interactive Techniques Conference Conference Papers},
  pages={1--10},
  year={2025}
}`
}

const video = (path) => withBase(`static/videos/${path}`)

export const comparisonGroups = [
  {
    title: 'A man throws jabs and crouches to dodge, then stands up and steps back to escape.',
    items: [
      { label: 'Style Reference', src: video('comparison/punch/punch_target_mesh.mp4') },
      { label: 'StableMoFusion+MCM_LDM', src: video('comparison/punch/punch_MCM_mesh.mp4') },
      {
        label: 'StableMoFusion+DecouplingContact',
        src: video('comparison/punch/punch_decouple_mesh.mp4')
      },
      { label: 'SMooDi', src: video('comparison/punch/punch_smoodi0_mesh.mp4') },
      { label: 'Ours', src: video('comparison/punch/punch_ours0_mesh.mp4'), highlight: true }
    ]
  },
  {
    title: 'A man walks to a chair and sits down, then he stands up and walks away.',
    items: [
      { label: 'Style Reference', src: video('comparison/sit/sit_tar.mp4') },
      { label: 'StableMoFusion+MCM_LDM', src: video('comparison/sit/sit_MCM.mp4') },
      {
        label: 'StableMoFusion+DecouplingContact',
        src: video('comparison/sit/sit_decouple.mp4')
      },
      { label: 'SMooDi', src: video('comparison/sit/sit_smoodi.mp4') },
      { label: 'Ours', src: video('comparison/sit/sit_ours_with_chair.mp4'), highlight: true }
    ]
  },
  {
    note: 'Even if the content of style motions diverges from texts, our method still produces compelling results.',
    title: 'A person trips, rolls forward and stands up.',
    items: [
      { label: 'Style Reference', src: video('comparison/roll/target_mesh.mp4') },
      { label: 'StableMoFusion+MCM_LDM', src: video('comparison/roll/roll_MCM_LDM_mesh.mp4') },
      {
        label: 'StableMoFusion+DecouplingContact',
        src: video('comparison/roll/roll_decouple_mesh.mp4')
      },
      { label: 'SMooDi', src: video('comparison/roll/roll_smoodi_mesh.mp4') },
      { label: 'Ours', src: video('comparison/roll/ours0_short_mesh.mp4'), highlight: true }
    ]
  },
  {
    title: 'A person strides forward, then jumps high in place.',
    items: [
      { label: 'Style Reference', src: video('comparison/monster/monster.mp4') },
      {
        label: 'StableMoFusion+MCM_LDM',
        src: video('comparison/monster/monster_MCM_LDM_mesh.mp4')
      },
      {
        label: 'StableMoFusion+DecouplingContact',
        src: video('comparison/monster/monster_decouple_mesh.mp4')
      },
      { label: 'SMooDi', src: video('comparison/monster/smoodi1_mesh.mp4') },
      {
        label: 'Ours',
        src: video('comparison/monster/monster_ours0_short_mesh.mp4'),
        highlight: true
      }
    ]
  },
  {
    note: 'Here we demonstrate a combination of content texts and style references that are out of distribution.',
    title: 'A person performs breakdancing (a dynamic street dance).',
    items: [
      { label: 'Style Reference', src: video('comparison/ood/ood_target_mesh.mp4') },
      { label: 'StableMoFusion+MCM_LDM', src: video('comparison/ood/ood_mcm_mesh.mp4') },
      {
        label: 'StableMoFusion+DecouplingContact',
        src: video('comparison/ood/ood_decouple_mesh.mp4')
      },
      { label: 'SMooDi', src: video('comparison/ood/ood_smoodi_mesh.mp4') },
      { label: 'Ours', src: video('comparison/ood/ood_ours_v7_mesh.mp4'), highlight: true }
    ]
  }
]

export const styleTransferGroup = {
  items: [
    { label: 'Content Reference', src: video('styletransfer/source_mesh.mp4') },
    { label: 'Style Reference', src: video('styletransfer/target_mesh.mp4') },
    { label: 'MCM_LDM', src: video('styletransfer/MCM_LDM_mesh.mp4') },
    { label: 'DecouplingContact', src: video('styletransfer/decouple_mesh.mp4') },
    { label: 'SMooDi', src: video('styletransfer/SMooDi_mesh.mp4') },
    { label: 'Ours', src: video('styletransfer/st_ours_new_mesh.mp4'), highlight: true }
  ]
}

export const inbetweenGroups = [
  {
    title: 'An old man walks forward while raising both hands.',
    items: [
      { label: 'MDM', src: video('inbetween/MDM.mp4') },
      { label: 'Ours (+ style from keyframes)', src: video('inbetween/ours.mp4'), highlight: true }
    ],
    after:
      'Without explicit style control, previous diffusion methods use the statistically probable motions to reach target keyframes, disrupting the "old man" style. Our method, on the other hand, can use the style from keyframe sequences to create motion that retains the "old man" style.'
  },
  {
    title: 'A man walks forward while raising both hands.',
    items: [
      { label: 'Style Reference', src: video('inbetween/target_mesh.mp4') },
      {
        label: 'Ours (+ style from reference)',
        src: video('inbetween/ours_relax.mp4'),
        highlight: true
      }
    ],
    after:
      'Given a reference motion with a relaxed style, our approach enables a style transition from an "old man" pace to a relaxed pace.'
  }
]

export const limitationGroup = {
  title: 'A person is skipping rope.',
  items: [
    { label: 'Content Reference', src: video('limitation/zombie_skipping_rope_target_mesh.mp4') },
    { label: 'Style Reference', src: video('limitation/zombie_skipping_rope_mesh.mp4') }
  ]
}
