export type UserRole = "admin" | "moderator" | "user"
export type UserStatus = "active" | "inactive" | "pending"

/**
 * Retourne les classes Tailwind pour la couleur du badge en fonction du rôle utilisateur.
 */
export function getRoleColor(role: UserRole): string {
  switch (role) {
    case "admin":
      return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300"
    case "moderator":
      return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
    case "user":
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
  }
}

/**
 * Retourne les classes Tailwind pour la couleur du badge en fonction du statut utilisateur.
 */
export function getStatusColor(status: UserStatus): string {
  switch (status) {
    case "active":
      return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
    case "inactive":
      return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
    case "pending":
    default:
      return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
  }
}
