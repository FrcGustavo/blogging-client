import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';

interface ExperienceItemData {
  company: string;
  role: string;
  period: string;
  description: string;
  tech?: string[];
}

interface ExperienceListProps {
  data?: ExperienceItemData[];
}

const ExperienceItem = ({ company, role, period, description, tech = [] }: ExperienceItemData) => (
  <Box
    sx={{
      borderLeft: '3px solid',
      borderColor: 'secondary.main',
      pl: 3,
      pb: 3,
      position: 'relative',
      '&::before': {
        content: '""',
        position: 'absolute',
        left: '-7px',
        top: '4px',
        width: '11px',
        height: '11px',
        borderRadius: '50%',
        backgroundColor: 'secondary.main',
      },
    }}
  >
    <Typography variant="h6" fontWeight="bold" fontSize="18px" color="text.primary">
      {role}
    </Typography>
    <Typography variant="subtitle1" fontWeight="600" color="primary.main" fontSize="15px">
      {company}
    </Typography>
    <Typography variant="caption" color="text.secondary" display="block" sx={{ mb: 1 }}>
      {period}
    </Typography>
    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
      {description}
    </Typography>
    {tech.length > 0 && (
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mt: 1.5 }}>
        {tech.map((t) => (
          <Chip
            key={t}
            label={t}
            size="small"
            sx={{ backgroundColor: 'rgba(75, 90, 138, 0.12)', fontSize: '11px' }}
          />
        ))}
      </Box>
    )}
  </Box>
);

const ExperienceList = ({ data = [] }: ExperienceListProps) => (
  <Box>
    {data.map((item, i) => (
      <ExperienceItem key={i} {...item} />
    ))}
  </Box>
);

export default ExperienceList;
